import { Trip } from './../models/Trip.model';
import { Injectable } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BookTripService {

  constructor(private firestore: AngularFirestore,public fb: FormBuilder) { }
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  

  form =  this.fb.group({
    Description: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Date: ['',[Validators.required]],
    Location: ['',[Validators.required]],
    Time: ['',[Validators.required]],
    Status:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    DriverID:  ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    ProjectName:['',[Validators.required,Validators.pattern(this.NamePattern)]],
    GroupNo: ['',[Validators.required]],
  })

  BookTrip(id:string,data:Trip)
  {
    let GroupNo = "30"
    data.DriverID =""

    this.firestore.doc(`students2/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      //console.log(item)
      //GroupNo =  item.GroupNo
     //this.adminSev.form.setValue(item)
    })
    this.firestore.collection('Trips').doc(id).set(
      {
        GroupNo:GroupNo,
        Description: data.Description,
        Date: data.Date,
        Time: data.Time,
        Location: data.Location,
        DriverID: data.DriverID,
        ProjectName: data.ProjectName
      }
    );
    console.log("done")
  }
  CancelTrip(id){
    this.firestore.doc(`Trips/${id}`).delete()
  }
}
