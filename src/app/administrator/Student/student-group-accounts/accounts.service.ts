import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastController, ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private firestore: AngularFirestore,
    private db: AngularFireDatabase,
    private toastController:ToastController,
    private Modal:ModalController) { }


  //Add
  AllocateAmount(data:number,GroupNo:number) {

        this.firestore
            .collection("GroupFunds").add({
              Balance: data,
              GroupNo: GroupNo,
              RemainingBalance: data
            }).then(g=>{
              this.SuccessfullyUp()
            })
  }
  async SuccessfullyUp() {
    const toast = await this.toastController.create({
      message: 'Amount Allocated successfully',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
