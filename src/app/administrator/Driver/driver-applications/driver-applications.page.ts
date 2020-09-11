import { DriverApplicationsService } from './driver-applications.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, AlertController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-driver-applications',
  templateUrl: './driver-applications.page.html',
  styleUrls: ['./driver-applications.page.scss'],
})
export class DriverApplicationsPage implements OnInit {

  constructor( private ModalCtrl:ModalController,
    private router:Router,public navCtrl: NavController
    ,private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private DriverAppServ:DriverApplicationsService) {
    
  }
  ApplicantDrivers =[]
 ngOnInit() {

  //check for the drivers
  this.firestore.collection("Drivers").snapshotChanges().subscribe(items=>{
    this.ApplicantDrivers =[];
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
                    item.Date = datetem.ApplicationDate})
                        //Add tot he general array
                        this.ApplicantDrivers.push(item)
                  }
                  else{
                    
                  }
              })
    })
    console.log(this.ApplicantDrivers)
  })//ending level

 }

 gotoHomePage() {
  this.navCtrl.navigateForward('/exisiting-drivers');
}
 goToTestPage() {
  this.router.navigateByUrl('/exisiting-drivers');
}
  Show()
  {}
 async open(id:string) {
   const modal = await this.ModalCtrl.create({
     component:ModalComponent,
     cssClass:"myApplications",
     componentProps:{
       DriverId: id
     }
   });
   console.log(id)
   await modal.present()

 }
///Delete
//


}
