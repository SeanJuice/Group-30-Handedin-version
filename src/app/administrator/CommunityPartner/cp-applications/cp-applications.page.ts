import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-cp-applications',
  templateUrl: './cp-applications.page.html',
  styleUrls: ['./cp-applications.page.scss'],
})
export class CpApplicationsPage implements OnInit {

  constructor( private ModalCtrl:ModalController,private router:Router,public navCtrl: NavController,private firestore: AngularFirestore,) {
    
  }
  ApplicantCP = []
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
 ngOnInit() {
//check for the drivers
this.firestore.collection("CommunityPartners").snapshotChanges().subscribe(items=>{
  this.ApplicantCP =[];
  items.forEach(a=>{
      let item:any = a.payload.doc.data()
      item.id = a.payload.doc.id;
   
      //check if the driver is an applicant 
      this.firestore.doc(`Users/${item.id}`).snapshotChanges().subscribe(user=>{
              //items.forEach(a=>{
                let Theuser:any = user.payload.data()
                Theuser.id = user.payload.id;
              
                if(Theuser.AccessRoleID =="Applicant")
                {
                  //if driver is applicant add date to the array
                  this.firestore.doc(`Application/${item.id}`).snapshotChanges().subscribe(items=>{
                    let datetem:any = items.payload.data()
                    item.Date = datetem.ApplicationDate
                  })
                      //Add tot he general array
                      this.ApplicantCP.push(item)
                }
                else{
                  
                }
            })
  })
  console.log(this.ApplicantCP)
})//ending level

 }
 ///////

  Show()
  {}
 async open(id:string) {
   const modal = await this.ModalCtrl.create({
     component:ModalComponent,
     cssClass:"myApplications",
     componentProps:{
       CPid:id
     }
   });
   await modal.present()
 }
 async openAdd() {
  const modal = await this.ModalCtrl.create({
    component:AddModalComponent,
    cssClass:"myApplications"
  });
  await modal.present()
}
}
