import { Student } from './../../administrator/models/Student.model';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.page.html',
  styleUrls: ['./student-profile.page.scss'],
})
export class StudentProfilePage implements OnInit {
  constructor( 
    private firestore: AngularFirestore,
    private db:AngularFireDatabase,
) { }
 Student:Student =  new Student()
  ngOnInit() {
    const Studentid = localStorage.getItem("UmuntuId")
    this.firestore.doc(`students2/${Studentid}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.Student = item
     //this.adminSev.form.setValue(item)
    })
  }


}
