import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { StudentDocumentsService } from './student-documents.service';
//import { AngularFireObject } from '@angular/fire/database';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';


@Component({
  selector: 'app-student-documents',
  templateUrl: './student-documents.page.html',
  styleUrls: ['./student-documents.page.scss'],
})
export class StudentDocumentsPage implements OnInit {
  isBig:boolean
 //Search
 @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
 searchText = '';
  constructor(
    private firestore: AngularFirestore,
    private alertcontroler:AlertController,
    private ModalCtrl:ModalController,
    private StudDocumentService: StudentDocumentsService
    ) {
    this.isBig=false;
   }

   
   //Documents:AngularFireObject<any>;
   Documents =[];

   currentFileUpload: FileUpload
   selectedFile: FileList
   @Input() fileUpload: FileUpload
  

   ngOnInit() {
    //retrieving data to table
      const id = localStorage.getItem("UmuntuId")
        this.firestore.collection("StudentDocuments").snapshotChanges().subscribe(items=>{
          this.Documents =[];
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            if(item.userId == id)
            this.Documents.push(item)
          })
          console.log(this.Documents)
        })
  }




  async openModal() {
    const modal = await this.ModalCtrl.create({
      component:ModalComponent,
      cssClass:"Profile"
    });
    await modal.present()
  }

  //confirmation of removal
  async Conifrmation(id,Url) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want remove this document?",
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
            this.StudDocumentService.RemoveDocument(id,Url)
           
          }
        }
      ]
    })
    await alert.present();
  }
}
