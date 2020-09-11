import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { StudentGroupAccountComponent } from './student-group-account/student-group-account.component';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AllocateAmountComponent } from './allocate-amount/allocate-amount.component';

@Component({
  selector: 'app-student-group-accounts',
  templateUrl: './student-group-accounts.page.html',
  styleUrls: ['./student-group-accounts.page.scss'],
})
export class StudentGroupAccountsPage implements OnInit {

  constructor(private ModalCtrl:ModalController,
    private router:Router,
    public navCtrl: NavController,private firestore:AngularFirestore) { }
    GroupsAllocations =[]
  ngOnInit() {
    this.firestore.collection("GroupFunds").snapshotChanges().subscribe(items=>{
      this.GroupsAllocations =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.Id = a.payload.doc.id;
        this.GroupsAllocations.push(item)
      })
    })
  }
  Show()
  {}
 async open(GroupNumb) {
   const modal = await this.ModalCtrl.create({
     component:StudentGroupAccountComponent,
     cssClass:"DownloadForStudentBudget",
     componentProps:{
      GroupNo: GroupNumb
     }

   });
   await modal.present()
 }
 //AllocateAmountComponent
 async openAdd(GroupNumber)
 {
  const modal = await this.ModalCtrl.create({
    componentProps:{
      GroupNumber: GroupNumber
    },
    component:AllocateAmountComponent,
    cssClass:"Profile"

  });
  await modal.present()

 }
}
