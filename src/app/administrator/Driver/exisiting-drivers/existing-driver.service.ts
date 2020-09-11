import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExistingDriverService {

  constructor(private firestore: AngularFirestore) { }

  Delete(id) {
    this.firestore.doc(`Drivers/${id}`).delete()
    
  }
}
