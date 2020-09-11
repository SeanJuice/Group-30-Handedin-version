import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { ConfirmedValidator } from './Confirmed.validator';
import { Administrator } from 'src/app/administrator/models/Administrator.model';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-addmodal',
  templateUrl: './addmodal.component.html',
  styleUrls: ['./addmodal.component.scss'],
})
export class AddmodalComponent implements OnInit {
 public  AdminForm: FormGroup
 //constructor
  constructor(public fb: FormBuilder, 
    public adminservice: AdminService,
    private toastController:ToastController,
    private Modal: ModalController,
    private alertcontroler:AlertController,
    private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.adminservice.form.reset()
  }
  

  //confirmation message and add 
  async onSubmit() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to remove this Administrator",
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
            let data= this.adminservice.form.value;
 
            //console.log(data)
          
           let id:string
               this.angularFireAuth.createUserWithEmailAndPassword(data.Email,data.Password).then(res =>{
                  id = res.user.uid
                  this.adminservice.AddAdminstrator(data,id)
                  this.adminservice.form.reset()
                  this.dismiss()
                  console.log("success")
               }).catch(err => {
                console.log('Something is wrong:',err.message);
                });
                

          }
        }
      ]
    });

    await alert.present();
  }

  //getthings for validation
  get f(){
    return this.adminservice.form.controls;
  }

  //When you click cancel or removing the modal
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
