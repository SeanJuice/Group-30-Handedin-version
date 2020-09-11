import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalComponent } from './modal/modal.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-existing-cp',
  templateUrl: './existing-cp.page.html',
  styleUrls: ['./existing-cp.page.scss'],
})
export class ExistingCPPage implements OnInit {

  constructor( private ModalCtrl:ModalController,private router:Router,public navCtrl: NavController,private firestore: AngularFirestore,) {
    
  }
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  ExisitingCP = []
 ngOnInit() {
   //check for the drivers
   this.firestore.collection("Drivers").snapshotChanges().subscribe(items=>{
    this.ExisitingCP =[];
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
                    
                        this.ExisitingCP.push(item)
                  }
                  else{
                    
                  }
              })
    })
    console.log(this.ExisitingCP)
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
}
