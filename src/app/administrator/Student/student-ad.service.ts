import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StudentAdService {

  constructor(private firestore: AngularFirestore,public fb: FormBuilder,private db: AngularFireDatabase) { }


  //Add
  AddGrade(data:number, id:string) {
    let TheStudent:any
    this.firestore.doc(`students2/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.firestore
      .collection("StudentMarks").doc(id)
      .set({
          Mark: Number(data),
          StudentName: item.Name +" "+item.Surname
        });
     //this.adminSev.form.setValue(item)
    })
      
  }
  //Delete the record 
  DeleteGrade(item) {
    this.firestore.doc(`StudentMarks/${item}`).delete()

  }
  //Updating the admin
  updateGrade(id,data:number){
    
    this.firestore.doc(`StudentMarks/${id}`).update({
      Mark: Number(data)
    });
    
  }
}
