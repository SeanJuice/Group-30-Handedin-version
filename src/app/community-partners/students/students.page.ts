import { Router } from '@angular/router';
import { ModalController, NavController, AlertController, ToastController } from '@ionic/angular';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase ,AngularFireObject} from '@angular/fire/database';
import * as moment from 'moment';
import { analytics } from 'firebase';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage implements OnInit {

  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  toggleSearch: boolean = false;
 isCheckedin = false;
 
  constructor(private ModalCtrl:ModalController,
    private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase) { }

  student:AngularFireObject<any>
  students =[];
  id=localStorage.getItem("UmuntuId");

  ngOnInit() {
    //console.log(moment().toDate())
   let date= moment().toDate();
   let then= moment().toDate();

   let x=moment.utc(moment(date,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss");
   console.log(x);

   //x =;
    //retrieving data to tab;e
   this.firestore.collection("students2").snapshotChanges().subscribe(items=>{
    this.students =[];
    items.forEach(a=>{
      let item:any = a.payload.doc.data()
      item.id = a.payload.doc.id;
      
      this.firestore.collection("Projects").snapshotChanges().subscribe(items=>{
        items.forEach(a=>{

            let projectItem:any = a.payload.doc.data()
            projectItem.id = a.payload.doc.id;
            console.log(item.CommunityPartnerID)
            if(item.GroupNo==projectItem.ChosenByGroup && projectItem.CommunityPartnerID==this.id && projectItem.Status=="Accepted")
            {
              if(item.HoursWorked < 40)
              {
                console.log(item.HoursWorked)
                item.ProjectName = projectItem.Name;
                this.students.push(item);
              }
              
            }

          })
        })
    })
    //console.log(this.students)
  })
  }
  
   ///Check-In
  async CheckIn() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"The student has been successfully checked in",
      buttons: [
         {
          text: 'OK ',
          handler: () => {
            this.isCheckedin =true;
           
            let dateVar = moment();
                let newDateVar = dateVar.utc().format();
      
            this.firestore
                .collection("students")
                .add({
                  StudentID: localStorage.getItem("UmuntuId"),
                  Date: newDateVar
                });

            
          }
        }
      ]
    });

    await alert.present();
  }


  async CheckOut(id:string,PrevHours:number) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"The student has been successfully checked Out",
      buttons: [
         {
          text: 'OK ',
          handler: () => {
                 //retrieving data to tab;e
                 this.isCheckedin =false;
                this.firestore.collection("students").snapshotChanges().subscribe(items=>{
                items.forEach(a=>{
                  let item:any = a.payload.doc.data()
                  item.id = a.payload.doc.id;
                  console.log("worked")
                  if(item.StudentID==localStorage.getItem('UmuntuId'))
                        {
                          let x = moment(item.Date);
                          let now= moment();
                          let duration = moment.duration(now.diff(x));
                          let hours = duration.asHours()+PrevHours;
                          this.firestore.doc(`students2/${id}`).update({
                            HoursWorked: hours
                          })
                          console.log("worked")
                        }
                  
                })
                
              })
          }
        }
      ]
    });

    await alert.present();
  }

 

}
