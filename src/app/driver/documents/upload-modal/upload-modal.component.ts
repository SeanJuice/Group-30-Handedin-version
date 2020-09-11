import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent implements OnInit {

  constructor(public DocumentSev:DocumentsService,private alertController:AlertController,private Modal:ModalController
    ) { }

  ngOnInit() {
  
  }

  currentFileUpload: FileUpload;
  selectedFiles: FileList; 
  email:string;
  progress: { percentage: number } = { percentage: 0 };

  async Confirmation(email:string){
    const alert = await this.alertController.create({
      cssClass: 'alertCustomCss',
      header: 'Confirm!',
      message: 'Are you sure you want uploading this document?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
    
          }
        }, {
          text: 'Yes',
          handler: () => {
           
           
            
            this.upload(email)
          }
        }
      ]
    });

    await alert.present();
    
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    }
    upload(email)
      {
        const id = localStorage.getItem("UmuntuId")
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new FileUpload(file);
        this.DocumentSev.pushFileToStorage(this.currentFileUpload,id,email,this.progress)
        
        //this.dismiss()
       
      }
      dismiss() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.Modal.dismiss({
          'dismissed': true
        });
      }
}
