import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStatService {
  Applicant: AngularFireObject<any>;
  constructor(private firestore: AngularFirestore,private db: AngularFireDatabase) { }
  GetApplciantStatus(id: string) {
    this.Applicant = this.db.object('Application/' + id);
    return this.Applicant;
  }
}
