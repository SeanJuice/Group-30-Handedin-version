import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../documents.service';
import { FileUpload } from './../file.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-upload-modal',
  templateUrl: './upload-modal.component.html',
  styleUrls: ['./upload-modal.component.scss'],
})
export class UploadModalComponent implements OnInit {

  constructor(public DocumentSev:DocumentsService,
    private alertController:AlertController,
    private Modal:ModalController
    ,private toastController:ToastController,
    private firestore: AngularFirestore) { }
    docs = []
  ngOnInit() {
        //retrieving data to tab;e
        this.firestore.collection("Projects").snapshotChanges().subscribe(items=>{
          this.docs =[];
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            
            this.docs.push(item)
          })
          console.log(this.docs)
        })
  
  }

  currentFileUpload: FileUpload;
  selectedFiles: FileList; 
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

           console.log(email);
           let data = this.DocumentSev.form.value;
           console.log(data);
           
            
            this.upload(data)
          }
        }
      ]
    });

    await alert.present();
    
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
    }
    upload(data)
      {
        const id = localStorage.getItem("UmuntuId")
        const file = this.selectedFiles.item(0);
        this.selectedFiles = undefined;
        this.currentFileUpload = new FileUpload(file);
        this.DocumentSev.pushFileToStorage(this.currentFileUpload,id,data,this.progress)
        console.log("1", this.currentFileUpload, "2", id, "3", data, "4", this.progress);
        
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
