import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { FileUpload } from './file.model';


@Injectable({
  providedIn: 'root'
})
export class DriverApplicationService {

  fileInfo:any;

  
  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase) { }


  //For uploading all the documents
  pushFileToStorage(fileUpload: FileUpload,basePath:string,TypeOFDoc:string) {
    //this declares the path per user  userId/TypeOfdocument/TheDocument /${TypeOFDoc}
   let basePath1 = `/${basePath}`;
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${basePath1}/${fileUpload.file.name}`).put(fileUpload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      ()=>{
        //success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          fileUpload.userId = basePath

          return this.firestore.collection('DriverDocuments').add({
            Name: fileUpload.file.name,
            Url: downloadURL,
            userId:basePath,
            type: TypeOFDoc,
            Date: Date.now()
          }).catch(rrr=>{
            console.log(rrr)
          })
          console.log(fileUpload)

        });
      }

    )
  }
  //saved the data in the database called in the previous function
  
  
}
