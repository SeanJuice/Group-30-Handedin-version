import { Project } from './../../../models/Project.model';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommunityPartnerService } from '../../community-partner.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss'],
})
export class AddmodalComponent implements OnInit {

  constructor(private alertcontroler:AlertController,private toastController:ToastController,
    public CPservice:CommunityPartnerService,
    private firestore: AngularFirestore,private Modal:ModalController) { }
    students = []
  ngOnInit() {

    //retrieving data to tab;e
    this.firestore.collection("CommunityPartners").snapshotChanges().subscribe(items=>{
      this.students =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        
        this.students.push(item)
      })
      console.log(this.students)
    })
 
  }
  get f(){
    return this.CPservice.form.controls;
  }

  submiting 
  async onSubmit() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to add this project?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            let data:Project= this.CPservice.form.value;
            data.Status="Pending"
            let t = new Date(Date.now())
              data.ProjectYear = t.getFullYear() //gets the year 
            this.CPservice.AddProject(data)
            this.Succesfully();
            this.dismiss()
          }
        }
      ]
    });
  
    await alert.present();
  }
  async Succesfully() {
    const toast = await this.toastController.create({
      message: 'Project Successfully added.',
      position:"middle",
      color:"secondary",
      duration: 1500
    });
    toast.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
