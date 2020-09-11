import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { StudentDocumentsService } from '../student-documents.service';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  CurrentFileUpload: FileUpload
  SelectedFile: FileList
  usertypes:string
  progress: { percentage: number } = { percentage: 0 };


  constructor
  (
    public StudDocumentsService: StudentDocumentsService,
    private alertcontroler:AlertController,
    private toastController:ToastController
  ) 
    { }

    selectFile(event) {
      this.SelectedFile = event.target.files;
      }
  
      upload(type: string)
        {
          const id = localStorage.getItem("UmuntuId")
          const file = this.SelectedFile.item(0);
          this.SelectedFile = undefined;
          this.CurrentFileUpload = new FileUpload(file);
          this.StudDocumentsService.pushFileToStorage(this.CurrentFileUpload , id ,type,this.progress)
        }

  ngOnInit() {}
  async Conifrmation(usertype: string) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want upload this document ?",
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
           this.upload(usertype)
          }
        }
      ]
    })
    await alert.present();
  }


}
