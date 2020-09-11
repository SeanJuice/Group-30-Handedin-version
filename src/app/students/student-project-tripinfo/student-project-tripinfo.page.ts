import { Trip } from './../models/Trip.model';
import { Component, OnInit } from '@angular/core';
import { DrivermodalComponent } from './drivermodal/drivermodal.component';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { TripInfoService } from './trip-info.service';

@Component({
  selector: 'app-student-project-tripinfo',
  templateUrl: './student-project-tripinfo.page.html',
  styleUrls: ['./student-project-tripinfo.page.scss'],
})
export class StudentProjectTripinfoPage implements OnInit {

  constructor( private ModalCtrl:ModalController,private router:Router,
    public navCtrl: NavController,private firestore: AngularFirestore
    ,public EditServe:TripInfoService,
    private alertcontroler:AlertController) {
    
  }
  Atrip: Trip = new Trip()
  id:string
  showMessage = true

   ngOnInit() {
    const id = localStorage.getItem("UmuntuId")
    this.firestore.doc(`Trips/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      this.id= items.payload.id
      /*this.Atrip.Date = item.Date,
      this.Atrip.Location = item.Location,
      this.Atrip.Time = item.Time,
      this.*/
      this.Atrip = item;

      this.Atrip.DriverID = item.DriverID;
    console.log(this.Atrip)
    
    })

   }
  async open(Driverid) {
    const modal = await this.ModalCtrl.create({
      component:DrivermodalComponent,
      cssClass:"Profile",
      componentProps:{
        DriverID: Driverid
      }
    });
    await modal.present()
  }
  async openEdit(Driverid) {
    const modal = await this.ModalCtrl.create({
      component:EditmodalComponent,
      cssClass:"Profile",
      componentProps:{
        DriverID: this.id
      }
    });
    await modal.present()
  }
  //confirm remove
  async  RomoveBookConfirm() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want unbook the trip?",
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
            this.EditServe.Delete(this.id)
          }
        }
      ]
    });

    await alert.present();
  }


  

}
