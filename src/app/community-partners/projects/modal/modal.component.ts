import { ToastController, ModalController } from '@ionic/angular';
import { ProjectService } from './../project.service';
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
  project:AngularFireObject<any>

  constructor(private firestore: AngularFirestore,
    private db:AngularFireDatabase,public projectService:ProjectService,
    private toastController:ToastController,
    private Modal:ModalController) { }

    
  ngOnInit() {
    this.firestore.doc(`Projects/${this.id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
     this.projectService.form.setValue(item)})
  }
  onSubmit(){
    let data= this.projectService.form.value;
    //const id = localStorage.getItem("UmuntuId")
    this.projectService.updateProject(data,this.id)
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
    return this.projectService.form.controls;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
