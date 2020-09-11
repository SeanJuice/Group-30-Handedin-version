import { ToastController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Trip } from 'src/app/students/models/Trip.model';
import { AvailableTripsService } from './available-trips.service';

@Component({
  selector: 'app-available-trips',
  templateUrl: './available-trips.page.html',
  styleUrls: ['./available-trips.page.scss'],
})
export class AvailableTripsPage implements OnInit {

  constructor(private toastController:ToastController,
    private alertcontroler: AlertController, 
    private firestore: AngularFirestore,
    private db:AngularFireDatabase, private AvailableTripServ:AvailableTripsService) { }
    Trips:Trip [];
    Availability = false
    TripIID:string
     DriverID = localStorage.getItem("UmuntuId")
  ngOnInit() {
    
    
    this.firestore.collection("Trips").snapshotChanges().subscribe(items=>{
      this.Trips =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        this.TripIID = item.id
        if(item.Status =="Available")
        {
          this.Trips.push(item)
          this.Availability=true
        }
        else{
          this.Availability=false
        }
     
      })
      console.log(this.Trips)
    })
  }



  async   SuccesssTakeTrip(TripID:string,DriverID:string) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to cancel this project trip?",
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
         
            this.AvailableTripServ.Taketrip(TripID,DriverID)
            this.SuccesfullyBooked()
          }
        }
      ]
    });

    await alert.present();
  }


  async SuccesfullyBooked() {
    const toast = await this.toastController.create({
      message: 'Project trip successfully Taken .',
      position:"middle",
      cssClass: "MyToasts",
      duration: 1000
    });
    toast.present();
  }
}
