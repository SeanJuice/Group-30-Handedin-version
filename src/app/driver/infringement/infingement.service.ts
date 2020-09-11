import { Infringement } from './../models/infringement.model';
import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InfingementService {

  constructor(private firestore: AngularFirestore,public fb: FormBuilder) { }
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  

  form =  this.fb.group({
    description: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    date: ['',[Validators.required]],
    location: ['',[Validators.required]],
    time: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    InfringementType: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
  })

  AddInfringement(id:string,data:Infringement)
  {
    data.DriverId = id;
    //this.firestore.collection('infringements').doc(id).set(data);
    this.firestore.collection('infringements').add(data)
  }
}
