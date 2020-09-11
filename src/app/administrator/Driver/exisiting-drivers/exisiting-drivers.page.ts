import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { DriverApplicationsService } from '../driver-applications/driver-applications.service';

@Component({
  selector: 'app-exisiting-drivers',
  templateUrl: './exisiting-drivers.page.html',
  styleUrls: ['./exisiting-drivers.page.scss'],
})
export class ExisitingDriversPage implements OnInit {

  constructor( private ModalCtrl:ModalController,private firestore: AngularFirestore,
    private DriverAppServ:DriverApplicationsService) {
    
  }
  ExisitingDrivers =[]
 ngOnInit() {
   //check for the drivers
  this.firestore.collection("Drivers").snapshotChanges().subscribe(items=>{
    this.ExisitingDrivers =[];
    items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
     
        //check if the driver is an applicant 
        this.firestore.doc(`Users/${item.id}`).snapshotChanges().subscribe(user=>{
                //items.forEach(a=>{
                  let Theuser:any = user.payload.data()
                  Theuser.id = user.payload.id;
                
                  if(Theuser.AccessRoleID !="Applicant")
                  {
                    
                        this.ExisitingDrivers.push(item)
                  }
                  else{
                    
                  }
              })
    })
    console.log(this.ExisitingDrivers)
  })//ending level


 }
 ///////
 
  Show()
  {
    
  }
  
 async open(id:string) {
   const modal = await this.ModalCtrl.create({
     component:ModalComponent,
     cssClass:"myApplications",
     componentProps:{
      DriverId: id
    }
   });
   await modal.present()
 }
}
