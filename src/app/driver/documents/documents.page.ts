import { UploadModalComponent } from '../documents/upload-modal/upload-modal.component';
import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { DocumentsService } from './documents.service';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { AngularFirestore } from '@angular/fire/firestore';
//import { AngularFireStorage} from 'angularfire2/storage'
@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

  constructor(public alertcontroler: AlertController,public toastController: ToastController,
     private ModalCtrl:ModalController,
     private uploadSev:DocumentsService,
     private firestore: AngularFirestore,
     ) { }
  fileUploads=[];
  currentFileUpload: FileUpload;
  selectedFiles: FileList; 
  @Input() fileUpload: FileUpload;
  
    ngOnInit() {
      const id = localStorage.getItem("UmuntuId")
      this.firestore.collection("DriverDocuments").snapshotChanges().subscribe(items=>{
        this.fileUploads =[];
        items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
         // console.log(item)
          if(item.userId == id)
           this.fileUploads.push(item)
        })
       // console.log(this.fileUploads)
      })

      
    }

    //Upload
    async openUploadModal() {
      const modal = await this.ModalCtrl.create({
        component:UploadModalComponent,
        cssClass:"Profile"
      });
      await modal.present()
    }
  ///Delete
  async DeleteDocument(id,url) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to delete this document?",
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
            this.uploadSev.DeleteDocument(id,url)
            
          }
        }
      ]
    });

    await alert.present();
  }
  //uploading

}
