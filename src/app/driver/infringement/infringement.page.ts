import { Infringement } from './../models/infringement.model';
import { InfingementService } from './infingement.service';
import { Component, OnInit } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-infringement',
  templateUrl: './infringement.page.html',
  styleUrls: ['./infringement.page.scss'],
})
export class InfringementPage implements OnInit {

  constructor(public toastController: ToastController,private alertcontroler:AlertController,public infrigeServ: InfingementService) { }

  ngOnInit() {}

  async   SuccesssInfrigement() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to submit?",
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
            let data= this.infrigeServ.form.value;
            this.submit(data)
            this.infrigeServ.form.reset()
          }
        }
      ]
    });

    await alert.present();
  }
  get f(){
    return this.infrigeServ.form.controls;
  }


  submit(info:Infringement)
  {
    const id = localStorage.getItem("UmuntuId")
    //console.log(info)
     this.infrigeServ.AddInfringement(id,info)
  }
  async Successs() {
    const toast = await this.toastController.create({
      message: ' successfully submitted.',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
}
