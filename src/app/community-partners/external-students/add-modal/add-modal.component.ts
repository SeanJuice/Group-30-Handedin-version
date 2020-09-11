import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { ExStudentService } from './../exStudent.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Administrator } from 'src/app/administrator/models/Administrator.model';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {
  
  public  exStudentForm: FormGroup
  constructor(public fb: FormBuilder, 
    public exStudentService: ExStudentService,
    private toastController:ToastController,
    private Modal: ModalController,
    private alertcontroler:AlertController,
    private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.exStudentService.form.reset()
  }

///Delete
async onSubmit() {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:" 	Are you sure you want to add this student?",
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
          let data= this.exStudentService.form.value;
          const id = localStorage.getItem("UmuntuId")
            this.exStudentService.AddProject(data,id)
            this.exStudentService.form.reset()
            this.dismiss()
            console.log("success")
              
        }
      }
    ]
  });

  await alert.present();
}

get f(){
  return this.exStudentService.form.controls;
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
