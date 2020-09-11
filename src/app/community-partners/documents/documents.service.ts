import { Injectable } from '@angular/core';
import { FileUpload } from './file.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage} from '@angular/fire/storage'
import { Validators, FormBuilder } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { ModalController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  id:string

  constructor(
    private db: AngularFireDatabase,
    private firestore: AngularFirestore,
    private storage:AngularFireStorage,
    public fb: FormBuilder,private Modal:ModalController) { }

  
  form =  this.fb.group({
    Date: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    DocumentType: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Url: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    CommunityPartnerID:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],

  })
   alreadyRan = true;


  //delete document
  DeleteDocument(id,downloadUrl) {
    this.firestore.doc(`CommunityPartnerDocuments/${id}`).delete();
    
    this.storage.storage.refFromURL(downloadUrl).delete();
    
    }

    //uploadig document
    pushFileToStorage(fileUpload: FileUpload,basePath:string,data,progress: { percentage: number }) {
      //this declares the path per user  userId/TypeOfdocument/TheDocument /${TypeOFDoc}
     
     let basePath1 = `/${basePath}`;
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`${basePath1}/${fileUpload.file.name}`).put(fileUpload.file);
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
            console.log(downloadURL)
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.id=fileUpload.url
            this.dismiss()
            console.log("here", data)
            if(this.alreadyRan == true)
            {
              this.alreadyRan =false;
              return this.firestore.collection('CommunityPartnerDocuments').add({
                Name: fileUpload.file.name,
                Url: downloadURL,
                userId:basePath,
                type: data.DocumentType,
                Date: Date.now()
              }).catch(rrr=>{
                console.log(rrr)
              })
              
            }
           
          
            console.log("successful") 
          });
        }
  
      )
    }

    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.Modal.dismiss({
        'dismissed': true
      });
    }

  
}
