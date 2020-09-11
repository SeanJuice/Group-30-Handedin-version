import { ModalController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import * as firebase from 'firebase';
import { AngularFireStorage } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class StudentDocumentsService {


  AlreadyRan =  true
//Constructor
  constructor(
    private firestore: AngularFirestore,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    private Modal:ModalController,
    private toastController:ToastController,
   ) 
    { }
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.Modal.dismiss({
        'dismissed': true
      });
    }


     //For uploading all the documents
  pushFileToStorage(fileUpload: FileUpload,basePath:string , TypeOfdocument:string ,progress: { percentage: number }) {
    //this declares the path per user  userId/TypeOfdocument/TheDocument /${TypeOFDoc}
    
    let basePath1 = `/${basePath}`;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${fileUpload.file.name}`).put(fileUpload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
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
          if(this.AlreadyRan == true)
          {
            this.AlreadyRan = false
            return this.firestore.collection('StudentDocuments').add({
              Name: fileUpload.file.name,
              Url:  downloadURL,
              userId: basePath,
              type: TypeOfdocument,
              date: Date.now()
            }). catch(rrr=>{
              console.log(rrr) 
            }).then(rr=>{
              this.dismiss()
              this.SuccessfullyUploaded()
            })
            
          }
         
        console.log("Sucess")});
      }

    )
  }
  async SuccessfullyUploaded() {
    const toast = await this.toastController.create({
      message: 'Your document is successfully uploaded',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }

  // Remove Student Document
 RemoveDocument (id,downloadURL)
  {
    this.firestore.doc(`StudentDocuments/${id}`).delete();
    this.storage.storage.refFromURL(downloadURL).delete()
    }
  //saved the data in the database called in the previous function
 
  }
  
  
   

