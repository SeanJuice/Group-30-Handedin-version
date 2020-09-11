import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TripInfoService {

  constructor(private firestore: AngularFirestore,public fb: FormBuilder) { }
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  

  form =  this.fb.group({
    Date: ['',[Validators.required]],
    Description: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    DriverID:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Location: ['',[Validators.required]],
    ProjectName:['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Status:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Time: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
  })


   //Delete the record 
   Delete(id) {
    this.firestore.doc(`Trips/${id}`).delete()
   
  }
  //Updating the admin
  update(data,id){
    
    this.firestore.doc(`Trips/${id}`).update(data);
    
  }
} 
