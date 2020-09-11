import { Project } from 'src/app/administrator/models/Project.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { StudProjectService } from './stud-project.service';

@Component({
  selector: 'app-student-projectinfo',
  templateUrl: './student-projectinfo.page.html',
  styleUrls: ['./student-projectinfo.page.scss'],
})
export class StudentProjectinfoPage implements OnInit {

  constructor(public alertcontroler: AlertController,public toastController: ToastController,
    private db:AngularFirestore, private StuService:StudProjectService) { }
 ProjectInfo:any;
 GroupNo:any
  ngOnInit() {
    const Studentid = localStorage.getItem("UmuntuId")
    this.db.doc(`students/${Studentid}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.GroupNo =  item.GroupNumber
     //this.adminSev.form.setValue(item)
    })
    
    this.db.collection("Projects").snapshotChanges().subscribe(items => {
        
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.ChosenByGroup == this.GroupNo)
        {
          console.log(item)
          this.ProjectInfo =  item
        }

      })
    })
    if(this.ProjectInfo =="")
    {
      this.ProjectInfo.ContactNumber =""
      this.ProjectInfo.PhysicalAddress =""
      this.ProjectInfo.ContactPerson =""
      this.ProjectInfo.Description =""
      this.ProjectInfo.Name =""
    }
  }


  ///Accpet or Reject project
  async Accept(ProjectId) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want accept this project?",
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
            this.StuService.AccceptProject(ProjectId)
            this.SuccessfullyAccepted()
            
          }
        }
      ]
    });

    await alert.present();
  }
  async Reject(ProjectId) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want Reject this project?",
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
            this.StuService.RejectProject(ProjectId)
            
          }
        }
      ]
    });

    await alert.present();
  }
  async SuccessfullyAccepted() {
    const toast = await this.toastController.create({
      message: 'Project Successfully Accepted .',
      position:"middle",
      color:"secondary",
      duration: 1500
    });
    toast.present();
  }
}
