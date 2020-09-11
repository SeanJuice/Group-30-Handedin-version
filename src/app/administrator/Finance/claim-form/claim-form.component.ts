import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { ClaimFormService } from './claim-form.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-claim-form',
  templateUrl: './claim-form.component.html',
  styleUrls: ['./claim-form.component.scss'],
})
export class ClaimFormComponent implements OnInit {
  currentFileUpload: FileUpload;
  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  Claimforms =[]
  constructor(private ClaimService:ClaimFormService,private firestore:AngularFirestore,private alertcontroler:AlertController) { }

  ngOnInit() {
    this.firestore.collection("ClaimFormTable").snapshotChanges().subscribe(items=>{
      this.Claimforms =[];
      items.forEach(a=>{
       let item:any = a.payload.doc.data()
       item.id = a.payload.doc.id;
       this.Claimforms.push(item)
      })
      console.log(this.Claimforms)
    })
  
  }
    async    onSendClaim(claim) {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want send this document ?",
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
              this.ClaimService.SendClaim(claim);
            }
          }
        ]
      })
      await alert.present();
    }

   //uploading
 selectFile(event) {
  this.selectedFiles = event.target.files;
}
 upload()
   {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;
    //console.log(file.type)
    this.currentFileUpload = new FileUpload(file);
    this.ClaimService.pushFileToStorage(this.currentFileUpload,this.progress)
  
   }

   DeleteDocument(id:string,Url:string)
   {
     this.ClaimService.DeleteDocument(id,Url)
   }
}
