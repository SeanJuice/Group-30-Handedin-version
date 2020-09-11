import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-available-trips',
  templateUrl: './available-trips.component.html',
  styleUrls: ['./available-trips.component.scss'],
})
export class AvailableTripsComponent implements OnInit {

  constructor(private alertcontroler: AlertController,public toastController: ToastController) { }

  ngOnInit() {}
  async SuccesssTakeTrip() {
    const toast = await this.toastController.create({
      message: 'Trip successfully taken.',
      position:"middle",
      color:"danger",
      duration: 2000
    });
    toast.present();
  }

}
