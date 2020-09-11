import { ToastController, ModalController } from '@ionic/angular';
import { ExStudentService } from './../exStudent.service';
import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() id: string;
  @Input() check: boolean;
  exStudent:AngularFireObject<any>

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase,public exStudentService:ExStudentService,
    private toastController:ToastController,
    private Modal:ModalController) { }

  ngOnInit() {
    this.firestore.doc(`External Students/${this.id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
     this.exStudentService.form.setValue(item)})
  }

  onSubmit(){
    let data= this.exStudentService.form.value;
    data.CommunityPartnerID = localStorage.getItem("UmuntuId")
    this.exStudentService.updateProject(data,this.id)
    this.dismiss() 
    this.Successs()
  }

  async Successs() {
    const toast = await this.toastController.create({
      message: 'Successfully Updated.',
      position:"middle",
      color:"secondary",
      duration: 2000 //s2 seconds
    });
    toast.present();
   
  }

  get f(){
    return this.exStudentService.form.controls;
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

}
