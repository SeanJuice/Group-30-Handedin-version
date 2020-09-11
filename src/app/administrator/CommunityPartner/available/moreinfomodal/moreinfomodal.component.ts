import { Component, OnInit, Input } from '@angular/core';
import { ModalController, ToastController, AlertController } from '@ionic/angular';
import { Project } from 'src/app/administrator/models/Project.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommunityPartnerService } from '../../community-partner.service';

@Component({
  selector: 'app-moreinfomodal',
  templateUrl: './moreinfomodal.component.html',
  styleUrls: ['./moreinfomodal.component.scss'],
})
export class MoreinfomodalComponent implements OnInit {
  @Input() ProjectId: string;
  constructor(
    private alertcontroler:AlertController,
    private toastController:ToastController,
    private firestore: AngularFirestore,
    private CPservice:CommunityPartnerService, 
    private Modal:ModalController) 
    { }

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

  async Remove(id:string)
  {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want remove this project?",
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
           this.CPservice.RemoveProject(id)
          }
        }
      ]
    });
    await alert.present();
    
  }
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

}
