import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommunityPartner } from '../../models/communitypartner.model';
import {Project} from '../../models/projects.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApplicationsService } from './../applications.service';
import { FormGroup,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {
  updateForm: FormGroup;
  cp:CommunityPartner = new CommunityPartner();
  project:Project = new Project();
  ApplicantOrCP = false;

  constructor(private firestore: AngularFirestore, public cpAppService:ApplicationsService, private alertController:AlertController, public fb: FormBuilder) { }

  ngOnInit() {
        //fill details to the fields
        const id = localStorage.getItem("UmuntuId")
        this.firestore.doc(`CommunityPartners/${id}`).snapshotChanges().subscribe(items=>{
          let item:any = items.payload.data()
          /*console.log(item)
          this.cp.name = item.name;
          this.cp.contactPerson = item.contactPerson;
          this.cp.contactNumber = item.contactNumber;
          this.cp.physicalAddress = item.physicalAddress;
          this.cp.postalAddress = item.postalAddress;
          console.log(this.cp);*/
          console.log(item)
          this.cpAppService.form.patchValue(item);
          this.cp=item;
          
        })

        this.firestore.collection("Application").snapshotChanges().subscribe(items=>{
          
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            if(item.id === id)
            {
                this.ApplicantOrCP=true;
            }
          })
         
        })

        
        this.firestore.doc(`Projects/${id}`).snapshotChanges().subscribe(items=>{
          let x:any = items.payload.data()
          console.log(x)
          this.cpAppService.form.patchValue(x);
          this.project=x;
          
          
        })

         //check if the CP is an applicant or a Normal CP 

  }
  async onSubmit() {

    const alert = await this.alertController.create({
      cssClass: 'alertCustomCss',
      header: 'Confirm!',
      message: 'Are you sure you want to change your details?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log(' Cancel: blah');
          //  this.Show=false
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.Update()
          }
        }
      ]
    });

    await alert.present();
  

}
Update(){
  const id = localStorage.getItem("UmuntuId")
this.cpAppService.updateCPDetails(this.cp,this.project,id)
}



}
