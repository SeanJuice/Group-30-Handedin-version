import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommunityPartnerService } from '../../community-partner.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @Input() CPid: string;
  CommunityPartner:any
  constructor(public CPService:CommunityPartnerService ,public fb: FormBuilder, private firestore: AngularFirestore,
    private toastController:ToastController,private alertcontroler:AlertController,private Modal:ModalController) { }
  CommunityPartnerForm:FormGroup
  ngOnInit() {
    this.firestore.doc(`CommunityPartners/${this.CPid}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      this.CommunityPartner = item
    })
  }
 CPForm()
 {
    this.CommunityPartnerForm =  this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(2)]],
    })
 }

 async RemoveCP() {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:"Are you sure you want to remove Community Partner and their projects?",
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
          this.CPService.Delete(this.CPid)
          //Do we delete all the project associated with the CP too?
          this.Succesfully();
        }
      }
    ]
  });

  await alert.present();
}
async Succesfully() {
  const toast = await this.toastController.create({
    message: 'Driver Removed!.',
    position:"middle",
    color:"danger",
    duration: 1200
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
