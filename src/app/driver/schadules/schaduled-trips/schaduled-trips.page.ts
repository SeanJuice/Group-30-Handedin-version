import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Trip } from 'src/app/students/models/Trip.model';

@Component({
  selector: 'app-schaduled-trips',
  templateUrl: './schaduled-trips.page.html',
  styleUrls: ['./schaduled-trips.page.scss'],
})
export class SchaduledTripsPage implements OnInit {

  constructor(private alertcontroler: AlertController,
    public toastController: ToastController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase, ) { }
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
            if(item.DriverID ==this.DriverID)
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
  async presentAlertPrompt() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      header: 'Change Date and Time!',
      inputs: [
        
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
          min:"2020"
        },
        {
          name: 'name6',
          type: 'time',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (AlertData) => {
            console.log(AlertData.name5)
            this.SuccesssReschaduleTrip();
          }
        }
      ]
    });

    await alert.present();
  }
  async SuccesssReschaduleTrip() {
    const toast = await this.toastController.create({
      message: 'Trip has been successfully rescheduled.',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  
}
