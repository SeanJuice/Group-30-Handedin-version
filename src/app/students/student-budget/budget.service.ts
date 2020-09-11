import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import * as firebase from 'firebase';
import { Validators, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  
  form =  this.fb.group({
    Description: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Date: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    Balance: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
  })
  
  AlreadyRan = true
  constructor( 
    private firestore: AngularFirestore,
    private fb: FormBuilder,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage,
    ) { }
    

     //For uploading all the documents
  pushFileToStorage(fileUpload: FileUpload,basePath:string , data,BudgetTableID) {
    //this declares the path per user  userId/TypeOfdocument/TheDocument /${TypeOFDoc}
    
    let basePath1 = `/${basePath}`;
    const storageRef = firebase.storage().ref(`${fileUpload.file.name}`);
    const uploadTask = storageRef.put(fileUpload.file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      ()=>{
        //success
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          console.log('File available at', downloadURL);
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          if(this.AlreadyRan == true)
          {
            this.AlreadyRan = false
            return this.firestore.collection('StudentReceipts').add({
              Name: fileUpload.file.name,
              GroupNo:BudgetTableID.StudentGroupNo,
              Url:  downloadURL,
              userId: basePath,
              Description: data.Description,
              Balance: data.Balance,
              Date: data.Date
            }). catch(rrr=>{
              console.log(rrr) 
            }).then(ee=>{
              this.firestore.doc(`GroupFunds/${BudgetTableID.TheID}`).update({
                RemainingBalance: Number(BudgetTableID.TheBalance)-Number(data.Balance)
              })
            })
            
          }
         
        console.log("Sucess")});
      }

    )
  }

  // Remove Remove Receipt
 RemoveReceipt (id,downloadURL)
  {
    this.firestore.doc(`StudentReceipts/${id}`).delete();
    this.storage.storage.refFromURL(downloadURL).delete()
    }
  //saved the data in the database called in the previous function
 
  
}
