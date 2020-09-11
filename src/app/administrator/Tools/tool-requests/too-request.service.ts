import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TooRequestService {

  constructor(private  firestore:AngularFirestore, private toastController: ToastController,) { }


  AcceptRequest(TooldId:string)
  {
    this.firestore.collection("Tools").doc(TooldId).update({
      ToolStatusID: "Accepted",
      Message: "Come collect Tool on Specified Date!"
    }).then(rr=>{
      this.Succesfully()
    })
  }
  RejectRequest(TooldId:string)
  {
    this.firestore.collection("Tools").doc(TooldId).update({
      ToolStatusID: "Rejected",
      
      Message: "Tool Cannot be borrow at the moment!"
    })
  }

  
  async Succesfully() {
    const toast = await this.toastController.create({
      message: 'Request accepted successfully.',
      position:"middle",
      cssClass: "MyToasts",
      duration: 1000
    });
    toast.present();
  }
}

