import { ToastController, ModalController } from '@ionic/angular';
import { AdminService } from './../admin.service';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Administrator } from 'src/app/administrator/models/Administrator.model';

@Component({
  selector: 'app-editmodal',
  templateUrl: './editmodal.component.html',
  styleUrls: ['./editmodal.component.scss'],
})
export class EditmodalComponent implements OnInit {
  @Input() id: string;
  @Input() check: boolean;
  Admin: Administrator = new Administrator()

  //Admin:AngularFireObject<any>
  constructor( private firestore: AngularFirestore,
    private db:AngularFireDatabase,public adminSev:AdminService,
    private toastController:ToastController,
    private Modal:ModalController) { }

  ngOnInit() {
    this.firestore.doc(`Administrator/${this.id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.Admin = item
     //this.adminSev.form.setValue(item)
    })
  }
  onSubmit(){
    let data= this.adminSev.form.value;
    this.adminSev.updateAdmiin(data,this.id)
    this.dismiss() 
  }
  get f(){
    return this.adminSev.form.controls;
  }

  //When you click cancel
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

}
