import { Component, OnInit } from '@angular/core';
import { Application } from './../../../register/applications/Application.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { ApplicationStatService } from './application-status.service';

@Component({
  selector: 'app-application-status',
  templateUrl: './application-status.page.html',
  styleUrls: ['./application-status.page.scss'],
})
export class ApplicationStatusPage implements OnInit {
  Applicant= [] ;

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase,private StatusService:ApplicationStatService) { }

  ngOnInit() {
    const id = localStorage.getItem("UmuntuId")

    this.firestore.collection("Application").snapshotChanges().subscribe(items=>{
          
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.id === id)
        {
            this.Applicant.push(item)
            console.log(this.Applicant)
        }
      })
     
    })
  }

}
