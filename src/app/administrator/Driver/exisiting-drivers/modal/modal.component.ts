import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { Driver } from 'src/app/driver/models/driver.model';
import { License } from 'src/app/driver/models/License.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { DriverApplicationsService } from '../../driver-applications/driver-applications.service';
import { ExistingDriverService } from '../existing-driver.service';

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
  Infringements = []
   constructor(private alertcontroler:AlertController,private toastController:ToastController,
     private firestore: AngularFirestore,private modalCtrl:ModalController,
     private db:AngularFireDatabase,
     private Driversev:ExistingDriverService ) { }
 
   ngOnInit() {
     this.firestore.doc(`Drivers/${this.DriverId}`).snapshotChanges().subscribe(items=>{
       let item:any = items.payload.data()
       this.driver =  item
       this.license.ExpiryDate = item.DriverLicense.ExpiryDate;
       this.license.LicenseCodeID = item.DriverLicense.LicenseCodeID;
       this.license.LicenseRestriction = item.DriverLicense.LicenseRestriction;
       console.log( this.driver)
     })

     this.firestore.collection("infringements").snapshotChanges().subscribe(items=>{
      this.Infringements =[];
      items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
              if(item.DriverId == this.DriverId)
              {
                this.Infringements.push(item)
              }
       
            })  
          })
     //infringements
    }


  
  async RemoveDriver() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to remove Driver?",
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
            this.Driversev.Delete(this.DriverId)
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
      duration: 1500
    });
    toast.present();
  }
}
