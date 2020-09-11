import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectmodalComponent } from './projectmodal/projectmodal.component';
import { Application } from './../Application.model';
import { User } from './../../User.model';
import {CommunityPartner} from './../../../community-partners/models/communitypartner.model'
import {Project} from './../../../community-partners/models/projects.model'
import { AlertController } from '@ionic/angular';
import { code } from 'src/app/driver/models/code.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cp-application',
  templateUrl: './cp-application.page.html',
  styleUrls: ['./cp-application.page.scss'],
})
export class CPApplicationPage implements OnInit {

//instances of classes
  cp:CommunityPartner = new CommunityPartner();
  project:Project = new Project();
  user:User = new User();
  application: Application = new Application();

  constructor(private ModalCtrl: ModalController, public alertController: AlertController , public firestore: AngularFirestore, private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router ) { }
Now:boolean
Show:boolean
FirstPart:boolean
  ngOnInit() {
    this.Now=false
    this.Show =false
    this.FirstPart=true
  }
  async openAdd() {
    const modal = await this.ModalCtrl.create({
      component:ProjectmodalComponent
    });
    await modal.present()
  }

//When you submit this happens
async onSubmit() {
  if(this.Show)
  {
      const alert = await this.alertController.create({
        cssClass: 'alertCustomCss',
        header: 'Confirm!',
        message: 'Are you sure you want to apply to be a JCP Community Partner?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
              this.Show=false
            }
          }, {
            text: 'Okay',
            handler: () => {
              this.Submit()
            }
          }
        ]
      });
  
      await alert.present();
    }
  
  }

  home()
  {
    this.router.navigate(['/login/register']);
  }

  Submit()
  {
    this.application = new Application()
    this.application.ApplicaitonStatus = "Submitted"
    this.application.ApplicationDate = Date.now();  
    this.application.Applicationtype = "CommunityPartner";
    this.user.Username = this.user.Email;
    console.log(this.user.Username)
    this.angularFireAuth.createUserWithEmailAndPassword(this.user.Email,this.user.Password).then(
      res=>{
        //Convert the  Object to proper stucture 
        let   cp1:CommunityPartner = new CommunityPartner()
        cp1 = Object.assign({}, this.cp)                                                                                                                                                                                                                                                                             
        let app:Application = new Application()
        app = Object.assign({}, this.application)

        //functions that add the tables and data
        this.firestore.collection('CommunityPartners').doc(res.user.uid).set({
          Name: this.cp.name,
          ContactPerson: this.cp.contactPerson,
          ContactNumber :this.cp.contactNumber,
          PhysicalAddress: this.cp.physicalAddress,
          PostalAddress: this.cp.postalAddress,       
        });
        //projects
        this.firestore.collection('Projects').doc(res.user.uid).set({
          ProjectYear: "2020",
          Category: this.project.Category,
          CommunityPartnerID: res.user.uid,
          Status: "Pending",
          ContactPerson: this.project.ContactPerson,
          Name: this.project.Name,
          Description: this.project.Description,
          PhysicalAddress: this.project.PhysicalAddress,      
        });
       // this.firestore.collection('CommunityPartners').doc(res.user.uid)
        this.firestore.collection('Application').doc(res.user.uid).set(app);
        this.firestore.collection('Users').doc(res.user.uid).set({
          UserTypeID: "CommunityPartner",
          AccessRoleID:"Applicant",
          Email:this.user.Email,
        })
        res.user.sendEmailVerification()
        console.log("success ADD")
        window.alert('Please validate your email address. Kindly check your inbox.')
        //Calling functions that upload all the documents
        localStorage.setItem('UmuntuId', res.user.uid);
        this.router.navigate(['/login'])
      }
    ).catch(res=>{
      console.log(res)
    })
  }
}
