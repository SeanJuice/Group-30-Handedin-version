import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tool-requestinfo',
  templateUrl: './tool-requestinfo.page.html',
  styleUrls: ['./tool-requestinfo.page.scss'],
})
export class ToolRequestinfoPage implements OnInit {

  constructor(private db:AngularFirestore,private alertcontroler:AlertController) { }
  ToolInfo:any;
  isExisiting = false;
  ngOnInit() {
    const Studentid = localStorage.getItem("UmuntuId")

    this.db.collection("Tools").snapshotChanges().subscribe(items => {
      
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.ToolStatusID== "Requested")
        {
          if(item.RequestInfo.StudentId==Studentid)
          {
            this.isExisiting =  true
            this.ToolInfo = item
          }
                 
        }
  
      })
    })
  }
  async Confirmation(ToolID) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want cancel request?",
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.db.collection('Tools').doc(ToolID).update({
              ToolStatusID: "Requested",
              RequestInfo:{
                RequestDate: "",
                ReturnDate: "",
                StudentId: ""
              }
            })
          }
        }
      ]
    })
    await alert.present();
  }

}
