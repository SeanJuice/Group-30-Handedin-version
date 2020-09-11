import { License } from './../../../../driver/models/License.model';
import { Driver } from './../../../../driver/models/driver.model';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { DriverApplicationsService } from '../driver-applications.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
 id:string;
 @Input() DriverId: string;
 driver: Driver =  new Driver()
 license:License = new License()
  constructor(private alertcontroler:AlertController,
    private firestore: AngularFirestore,private modalCtrl:ModalController,
    private db:AngularFireDatabase,
    private Driversev:DriverApplicationsService) { }

  ngOnInit() {
    this.firestore.doc(`Drivers/${this.DriverId}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      this.driver =  item
      this.license.ExpiryDate = item.DriverLicense.ExpiryDate;
      this.license.LicenseCodeID = item.DriverLicense.LicenseCodeID;
      this.license.LicenseRestriction = item.DriverLicense.LicenseRestriction;
      console.log( this.driver)
     //this.adminSev.form.setValue(item)
    })

    console.log(this.db.list('/students').snapshotChanges())
  }
  async AcceptDriver() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want Accept this Driver?",
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
            this.Driversev.AcceptApplicaition(this.DriverId)
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
      message:"Are you sure you want reject this Driver?",
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
            this.Driversev.RejectApplication(this.DriverId)
            this.dismiss()
          }
        }
      ]
    });
    await alert.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
