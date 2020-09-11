import { AngularFirestore } from '@angular/fire/firestore';
import { AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SetReminderService } from './set-reminder.service';

@Component({
  selector: 'app-set-reminder',
  templateUrl: './set-reminder.component.html',
  styleUrls: ['./set-reminder.component.scss'],
})
export class SetReminderComponent implements OnInit {
  submitted = false
  constructor(public RemidnerServ:SetReminderService,
    private alertcontroler:AlertController,
    private toastController:ToastController,
    private db: AngularFirestore) { }
    Reminder:any
    isAvailble=false
  ngOnInit() {
    console.log("7 days",new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))
    console.log("Tomorrow",new Date(Date.now() + 24 * 60 * 60 * 1000))

    this.db.collection("Reminders").snapshotChanges().subscribe(items => {
        
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        this.Reminder=item
        this.isAvailble =true
      })
    })
  }

  async    setReminder() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want set this reminder ?",
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
            let data = this.RemidnerServ.form.value
            this.RemidnerServ.AddReminders(data)
            this.Successs()
          }
        }
      ]
    })
    await alert.present();
  }
    //getthings for validation
    get f(){
      return this.RemidnerServ.form.controls;
    }
    async Successs() {
      const toast = await this.toastController.create({
        message: ' successfully submitted.',
        position:"middle",
        cssClass: "MyToasts",
        duration: 2000
      });
      toast.present();
    }
}
