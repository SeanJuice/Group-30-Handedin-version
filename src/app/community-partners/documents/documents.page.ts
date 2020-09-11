import { UploadModalComponent } from '../documents/upload-modal/upload-modal.component';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { DocumentsService } from './documents.service';
import { map } from 'rxjs/operators';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.page.html',
  styleUrls: ['./documents.page.scss'],
})
export class DocumentsPage implements OnInit {

//For searching 
  
@ViewChild('searchbar',{static: true}) searchbar: ElementRef;
searchText = '';
toggleSearch: boolean = false;

    constructor(public alertcontroler: AlertController,public toastController: ToastController,
      private ModalCtrl:ModalController,
      private DocumentSev:DocumentsService,
      private firestore: AngularFirestore,) { }
      
      fileUploads=[];
      currentFileUpload: FileUpload;
      selectedFiles: FileList; 
      @Input() fileUpload: FileUpload;

    ngOnInit() {
      const id = localStorage.getItem("UmuntuId")
      console.log(id)
      this.firestore.collection("CommunityPartnerDocuments").snapshotChanges().subscribe(items=>{
        this.fileUploads =[];
        items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
          console.log(item)
          if(item.userId == id) {
             //if driver is applicant add date to the array
            this.firestore.doc(`Projects/${item.userId}`).snapshotChanges().subscribe(items=>{
              let datetem:any = items.payload.data()
              item.PName = datetem.Name
            })

            this.fileUploads.push(item)
          } 
        })
        console.log(this.fileUploads)
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
            this.DocumentSev.DeleteDocument(id,url)
            
          }
        }
      ]
    });

    await alert.present();
  }
}
