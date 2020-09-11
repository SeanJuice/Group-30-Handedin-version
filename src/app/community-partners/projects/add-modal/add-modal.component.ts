import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, AlertController } from '@ionic/angular';
import { ProjectService } from './../project.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { Administrator } from 'src/app/administrator/models/Administrator.model';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {
  public  projectForm: FormGroup
  constructor(public fb: FormBuilder, 
    public projectService: ProjectService,
    private toastController:ToastController,
    private Modal: ModalController,
    private alertcontroler:AlertController,
    private angularFireAuth: AngularFireAuth) { }

  ngOnInit() {
    this.projectService.form.reset()
  }
///Delete
async onSubmit() {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:" 	Are you sure you want to add this project?",
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
          let data= this.projectService.form.value;
          console.log(data)
         const id = localStorage.getItem("UmuntuId")
            this.projectService.AddProject(data,id)
            this.projectService.form.reset()
            this.dismiss()
            console.log("success")
              
        }
      }
    ]
  });

  await alert.present();
}
get f(){
  return this.projectService.form.controls;
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
