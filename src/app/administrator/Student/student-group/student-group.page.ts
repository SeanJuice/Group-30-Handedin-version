import { Component, OnInit } from '@angular/core';
import { StudentGroupsComponent } from './student-groups/student-groups.component';
import { ModalController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-student-group',
  templateUrl: './student-group.page.html',
  styleUrls: ['./student-group.page.scss'],
})
export class StudentGroupPage implements OnInit {

  constructor(private ModalCtrl:ModalController,public alertcontroler: AlertController,public toastController: ToastController) { }

      Allinfo:boolean
      GroupInfo:boolean
      ngOnInit() {
        this.Allinfo=false;
        this.GroupInfo=true
      }
      ToggleAll()
      {
          this.GroupInfo=false;
          this.Allinfo=true;
      }
      ToggleGroups()
      {
          this.GroupInfo=true;
          this.Allinfo=false;
      }
  
   
    async openStudent() {
      const modal = await this.ModalCtrl.create({
        component:StudentGroupsComponent
      });
      await modal.present()
    }
 ///Delete
 async DeleteStudent() {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:"Are you sure you want to remove the student?",
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
          this.SuccesfullyDeleted();
        }
      }
    ]
  });

  await alert.present();
}
async SuccesfullyDeleted() {
  const toast = await this.toastController.create({
    message: 'Student Successfully removed .',
    position:"middle",
    color:"secondary",
    duration: 1500
  });
  toast.present();
}
    
}
