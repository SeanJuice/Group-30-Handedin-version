import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommunityPartnerService } from '../../community-partner.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

 
  constructor(private alertcontroler:AlertController,private firestore: AngularFirestore,
    private CPservice:CommunityPartnerService,private toastController:ToastController,private Modal:ModalController) { }
  @Input() CPid: string;
  TheCP:any
  ngOnInit() {
    this.firestore.doc(`CommunityPartners/${this.CPid}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      item.id =  items.payload.id
      console.log(item)
      this.TheCP= item
     
    })
  }
///Delete
  async AcceptCP() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want Accept this Community partner?",
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
           this.CPservice.AcceptApplicaition(this.CPid)
           this.Successs()
           this.dismiss()
          }
        }
      ]
    });
    await alert.present();
  }
  //Reject
  async RejectDriver() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want reject this Community partner?",
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
            this.CPservice.RejectApplication(this.CPid)
            this.dismiss()
          }
        }
      ]
    });
    await alert.present();
  }

  async Successs() {
    const toast = await this.toastController.create({
      message: 'Community partner Successfully Accepted.',
      position:"middle",
      color:"secondary",
      duration: 2000, //s2 seconds,
    });
    toast.present();
   
  }
  //When you click cancel
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
  
}
