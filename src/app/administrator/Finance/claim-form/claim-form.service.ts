import { ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ClaimFormService {
  private basePath = '/adminClaimForms';
  alreadyRan = true

  constructor(private db: AngularFireDatabase,private firestore:AngularFirestore,
     private storage:AngularFireStorage,private toastController:ToastController) { }


  DeleteDocument(id,downloadUrl) {
    this.firestore.doc(`ClaimFormTable/${id}`).delete();
    
    this.storage.storage.refFromURL(downloadUrl).delete().then(dd=>{
      this.DeletedSuccessfully()
    });
    
    }
    SendClaim(claim)
    {
      this.firestore.doc(`ClaimFormTable/${claim.id}`).delete().then(ee=>{
        claim.isSent=true;
        this.firestore.collection('ClaimFormTable').add(claim).then(dd=>{
          this.SuccessfullyUpdated()
        })
        console.log("done!!!!")
      })
    
     
    }
  
  pushFileToStorage(fileUpload: FileUpload,progress: { percentage: number }) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,   (snapshot) => {
      // in progress
      const snap = snapshot as firebase.storage.UploadTaskSnapshot;
      progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
    },
      (error) =>{
        console.log(error)
      },
      ()=>{
        //success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          //add to the databse 
          if(this.alreadyRan == true)
          {
            this.alreadyRan =false;
            return this.firestore.collection('ClaimFormTable').add({
              Name: fileUpload.file.name,
              Url: downloadURL,
              Date: Date.now(),
              isSent: false
            }).catch(rrr=>{
              console.log(rrr)
            })
            
          }
          
        });
      }

    )
  }
  async SuccessfullyUpdated() {
    const toast = await this.toastController.create({
      message: 'Claim form successfully Sent',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }

  async DeletedSuccessfully() {
    const toast = await this.toastController.create({
      message: 'Claim form deleted',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  
  
  
}
