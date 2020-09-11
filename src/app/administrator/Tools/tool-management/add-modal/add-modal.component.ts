import { Tool } from './../../models/tool.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';

import { ToolService } from '../tool.service';
import { AngularFirestore } from '@angular/fire/firestore';
import html2pdf from 'html2pdf.js'
@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss'],
})
export class AddModalComponent implements OnInit {

  constructor(private alertcontroler: AlertController, private toastController: ToastController,
     public ToolServ: ToolService, private Modal:ModalController,private db: AngularFirestore) { }
  AddToolScreen:boolean;
  GenerateQRCode:boolean;
  QRCodeData ="";
  ngOnInit() {
    this.AddToolScreen=true;
    this.GenerateQRCode=false;
    this.ToolServ.form.reset()

  }
 
  get f(){
    return this.ToolServ.form.controls;
  }

  ///
  async Confirmation() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to add This tool?",
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
            ///generates the Id
            var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
              for (var i = 0, n = charset.length; i < length; ++i) {
                  retVal += charset.charAt(Math.floor(Math.random() * n));
                }

            ////
            let data: Tool = this.ToolServ.form.value
            this.ToolServ.form.reset()
            let id = retVal+"Tool"
            console.log(retVal)
            this.ToolServ.addNewTool(data,id)
            this.HideShowQRCode(id)
            console.log(data)
            this.Succesfully()
           //this.dismiss()
           
          }
        }
      ]
    });

    await alert.present();
  }
 // Making a random ID
 
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

  async Succesfully() {
    const toast = await this.toastController.create({
      message: 'Tool added successfully.',
      cssClass: "MyToasts",
      color:"secondary",
      duration: 2000
    });
    toast.present();
    
  }

  HideShowQRCode(Id)
  {
    this.AddToolScreen=false;
    this.GenerateQRCode=true;
    this.db.doc(`Tools/${Id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      item.id =  items.payload.id
      console.log(item)
      this.QRCodeData= JSON.stringify(item.id);
     //this.adminSev.form.setValue(item)
    })
  }

  Download()
  {
    const options = {
            margin: [0.5,0.5],
            filename: 'ToolConditionReport.pdf',
            image:{type: 'jpeg',quality:'0.98'},
            html2canvas:{},
            jsPDF:{orientation:'landscape', format: 'a3'}
          };
            //console.log("here1")
          const content: Element = document.getElementById('content');
          console.log("heree",content)
            //console.log(options)
          html2pdf().from(content).set(options).save();
  }
}
