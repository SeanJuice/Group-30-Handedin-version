import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { ExternalStudents } from '../models/exStudents.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class ExStudentService {
  exStudents: AngularFireList<any>;   
  exNamePattern = "^([A-z0-9À-ž\s]){2,}$";
  exSurnamePattern = "^([A-z0-9À-ž\s]){2,}$";
  trainingPattern = "^([A-z0-9À-ž\s]){2,}$";
  addressPattern = "^([A-z0-9À-ž\s]){2,}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  contactNumberPattern = "^([A-z0-9À-ž\s]){2,}$"; 

  form =  this.fb.group({
    ExternalStudentName: ['',[Validators.required,Validators.pattern(this.exNamePattern)]],
    ExternalStudentSurname: ['',[Validators.required,Validators.pattern(this.exSurnamePattern)]],
    Training: ['',[Validators.required,Validators.pattern(this.trainingPattern)]],
    Address: ['',[Validators.required,Validators.pattern(this.addressPattern)]],
    Email: ['',[Validators.required]],
    ContactNumber: ['',[Validators.required,Validators.pattern(this.contactNumberPattern)]],
  })
  //constructor 
  constructor(private firestore: AngularFirestore,public fb: FormBuilder,private db: AngularFireDatabase) { }

  
  //Add
  AddProject(data, id:string) {
        data.CommunityPartnerID=id;
        this.firestore
            .collection("External Students")
            .add(data);
              
              
  }
  //Delete the record 
  Delete(item) {
    this.firestore.doc(`External Students/${item.id}`).delete()
  }
  //Updating the admin
  updateProject(data,id){
    
    this.firestore.doc(`External Students/${id}`).update(data);
    
  }
}
