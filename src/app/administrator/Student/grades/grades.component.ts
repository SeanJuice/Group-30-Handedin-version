import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from './../../models/Student.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { StudentAdService } from '../student-ad.service';
import { StudentAd } from '../StudentAd.model';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.scss'],
})
export class GradesComponent implements OnInit {
  amout:Number;
  constructor( public alertcontroler: AlertController,
    public toastController: ToastController,
    private firestore:AngularFirestore,private GradeSev:StudentAdService) {
    
   }
 // students = []
  students:StudentAd[] = []
  ngOnInit() {

    //retrieving data to tab;e
    this.firestore.collection("students2").snapshotChanges().subscribe(items=>{
      this.students =[];
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.Id = a.payload.doc.id;
        this.firestore.collection("StudentMarks").snapshotChanges().subscribe(itemz=>{
          itemz.forEach(a=>{
            let it:any = a.payload.doc.data()
            it.Id = a.payload.doc.id;
            if(item.Id == it.Id)
            {
              item.Marks =  it.Mark
            }
          })
        })
        this.students.push(item)
      })
      console.log(this.students)
    })
  }
 
  
  async AddStudentGrade(id) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      header: 'Add Student Grade!',
      inputs: [
        
        // input date without min nor max
        {
          label:"Add Grade",
          name: 'Number',
          type: 'number',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (alertData) => {
            this.GradeSev.AddGrade(alertData.Number,id)

            this.SuccesssReschaduleTrip();
          }
        }
      ]
    });

    await alert.present();
  }

  //toast 
  async SuccesssReschaduleTrip() {
    const toast = await this.toastController.create({
      message: 'Grades added.',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000 //s2 seconds
    });
    toast.present();
  }
 
///Change grade
  async ChangeStudentGrade(id,Mark) {
  
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      header: 'Change student Grade',
      inputs: [
        
        // input date without min nor max
        {
          name: 'Number',
          type: 'number',
          value: Mark
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: (alertData) => {
            this.GradeSev.updateGrade(id,alertData.Number)
            this.GradesSuccessfulyChanged();
          }
        }
      ]
    });

    await alert.present();
  }
  async GradesSuccessfulyChanged() {
    const toast = await this.toastController.create({
      message: 'Grades Successfully Deleted.',
      position:"middle",
      color:"secondary",
      duration: 2000
    });
    toast.present();
  }
  
  ///Delete
  async DeleteGrade(id) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to remove the grade?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            this.GradeSev.DeleteGrade(id)
            this.SuccesfullyDeleted();
          }
        }
      ]
    });

    await alert.present();
  }

  async SuccesfullyDeleted() {
    const toast = await this.toastController.create({
      message: 'Grades Successfully Changed.',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
}