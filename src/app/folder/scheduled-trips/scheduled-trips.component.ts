import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-scheduled-trips',
  templateUrl: './scheduled-trips.component.html',
  styleUrls: ['./scheduled-trips.component.scss'],
})
export class ScheduledTripsComponent implements OnInit {

  constructor(private alertcontroler: AlertController,public toastController: ToastController) { }

  ngOnInit() {}
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
          handler: () => {
            this.SuccesssReschaduleTrip();
          }
        }
      ]
    });

    await alert.present();
  }
  async SuccesssReschaduleTrip() {
    const toast = await this.toastController.create({
      message: 'Trip has been successfully reschaduled.',
      position:"middle",
      color:"danger",
      duration: 2000
    });
    toast.present();
  }

}
