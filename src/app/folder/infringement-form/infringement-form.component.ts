import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-infringement-form',
  templateUrl: './infringement-form.component.html',
  styleUrls: ['./infringement-form.component.scss'],
})
export class InfringementFormComponent implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {}
  async SuccesssInfrigement() {
    const toast = await this.toastController.create({
      message: ' successfully submitted.',
      position:"middle",
      color:"danger",
      duration: 2000
    });
    toast.present();
  }
}
