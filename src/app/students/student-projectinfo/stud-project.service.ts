import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StudProjectService {

  constructor(private db:AngularFirestore) { }


  RejectProject(id){
    this.db.doc(`Projects/${id}`).update({
      Status:"Available",
      ChosenByGroup: "GroupNumber",
    });
  }
  AccceptProject(id){
    this.db.doc(`Projects/${id}`).update({
      Status:"Taken"
    });
  }
}
