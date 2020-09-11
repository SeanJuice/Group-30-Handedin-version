import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Project } from 'src/app/administrator/models/Project.model';
import { CommunityPartnerService } from '../../community-partner.service';

@Component({
  selector: 'app-possible-project',
  templateUrl: './possible-project.component.html',
  styleUrls: ['./possible-project.component.scss'],
})
export class PossibleProjectComponent implements OnInit {
  @Input() ProjectId: string;
  constructor(private alertcontroler:AlertController,private toastController:ToastController,
    private firestore: AngularFirestore,private CPservice:CommunityPartnerService, private Modal:ModalController) { }
  shwowing:boolean
  tableShow:boolean
  TheProject:Project
  TheId:string;

  ngOnInit() {
    this.firestore.doc(`Projects/${this.ProjectId}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      this.TheId =  items.payload.id
      console.log(item)
      this.TheProject = item
     
    })
  }


 async AddProject() {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:"Are you sure you want to Accept this project?",
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
          this.CPservice.AcceptProject(this.TheId,"Available")
          this.Successfully();
        }
      }
    ]
  });

  await alert.present();
}
  async Successfully() {
    const toast = await this.toastController.create({
      message: 'Project Successfully accepted.',
      position:"middle",
      color:"secondary",
      duration: 1500
    });
    toast.present();
    this. dismiss()
  }
  RejectProject()
  {
    this.CPservice.AcceptProject(this.TheId,"Rejected")
    this. dismiss()
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
