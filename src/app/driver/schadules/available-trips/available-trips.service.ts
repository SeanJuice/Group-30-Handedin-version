import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { firestore } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class AvailableTripsService {

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }

  
    Taketrip(tripID:string, Driverid:string)
    {
      this.firestore.doc(`Trips/${tripID}`).update({
        DriverID: Driverid,
        Status: "Taken"
      }).then(res=>{
       
        const increment = firestore.FieldValue.increment(1);
        const userLike = this.firestore.doc(`Drivers/${Driverid}`);
        userLike.update({ TripCount: increment });
      }).catch(error =>{
        console.log("TakeTripError=> ",error)
      });
    }
}
