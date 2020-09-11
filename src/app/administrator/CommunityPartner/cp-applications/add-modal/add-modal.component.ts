import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {

  constructor(private alertcontroler:AlertController) { }

  ngOnInit() {}
///Delete
  async AddCP() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want Add this Community partner?",
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
          
          }
        }
      ]
    });
    await alert.present();
  }
}
