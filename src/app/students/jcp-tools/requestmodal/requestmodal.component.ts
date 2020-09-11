import { JcptoolsService } from './../jcptools.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-requestmodal',
  templateUrl: './requestmodal.component.html',
  styleUrls: ['./requestmodal.component.scss'],
})
export class RequestmodalComponent implements OnInit {

  @Input() ToolId: string;
  date = Date.now();
  Message:string

  constructor(private alertcontroler:AlertController, 
    private modalCtrl:ModalController,public ToolSev:JcptoolsService) { }

  ngOnInit() {
    console.log(this.ToolId)
  }



  //confirmation

  async Confirmation(ToolId:string) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to request this tool?",
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
            let data =  this.ToolSev.form.value
            let  dat = new Date(data.RequestDate)
            let  now = new Date(Date.now())
            const Studentid = localStorage.getItem("UmuntuId")
            this.ToolSev.AddDates(Studentid,ToolId,data)
            /* if( dat<now)
             {
              this.ToolSev.AddDates(Studentid,ToolId,data)
               
             }
             else{
               this.Message ="Request Date must be after the Date today!"
             }*/
 
            //this.dismiss()
          }
        }
      ]
    })
    await alert.present();
  }

  get f(){
    return this.ToolSev.form.controls;
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }


}
