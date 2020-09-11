import { Application } from './../Application.model';
import { License } from './../../../driver/models/License.model';
import { User } from './../../User.model';
import { Driver } from './../../../driver/models/driver.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { code } from 'src/app/driver/models/code.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app'
import {NgForm} from '@angular/forms';
import { FileUpload } from './file.model';
import { DriverApplicationService } from './driver-application.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-driver-application',
  templateUrl: './driver-application.page.html',
  styleUrls: ['./driver-application.page.scss'],
})
export class DriverApplicationPage implements OnInit {
  Password:string;
  //instances of classes 
  driver:Driver = new Driver();
  user:User = new User();
  license:License = new License();
  application: Application = new Application();
  codes= [];
 //for uploading
 currentFileUpload1: FileUpload;
 currentFileUpload2: FileUpload;
 currentFileUpload3: FileUpload;
 selectedCOLFiles: FileList; //CopyofLicense
 selectedTFiles: FileList; //Timetable
 selectedIDFiles: FileList;//IdentityDoc

  //constructor
  constructor(public alertController: AlertController, 
    public firestore: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private db:AngularFireDatabase,
    private DriverAppSev:DriverApplicationService,
    private router: Router) {
    }

      Show:boolean
      FirstPart:boolean
      
  ngOnInit() {
    this.Show =false
    this.FirstPart=true
  
  }
    //getthings for validation
   
//When you submit this happens
  async onSubmit() {
    if(this.Show)
    {
        const alert = await this.alertController.create({
          cssClass: 'alertCustomCss',
          header: 'Confirm!',
          message: 'Are you sure you want to apply to be a JCP Driver?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log('Confirm Cancel: blah');
                this.Show=false
              }
            }, {
              text: 'Yes',
              handler: () => {
                this.Submit()
              }
            }
          ]
        });
    
        await alert.present();
      }
    
    }
    
  Submit()
  {
    this.application = new Application()
    this.application.ApplicaitonStatus = "Submitted"
    this.application.ApplicationDate = Date.now();  
    this.application.Applicationtype = "Driver";
    this.user.Username = this.user.Email;
    console.log(this.user.Username)
    this.angularFireAuth.createUserWithEmailAndPassword(this.user.Email,this.user.Password).then(
      res=>{
        //Convert the  Object to proper stucture 
        let drive:Driver = new Driver()
        drive = Object.assign({}, this.driver)
        let lic:License = new License()
        lic = Object.assign({}, this.license)
        let app:Application = new Application()
        app = Object.assign({}, this.application)

        //functions that add the tables and data
        this.firestore.collection('Drivers').doc(res.user.uid).set({
          Name: this.driver.Name,
          Surname: this.driver.Surname,
          StudentNumber: this.driver.StudentNumber,
          contactNumber :this.driver.contactNumber,
          DriverLicense:{
            ExpiryDate: this.license.ExpiryDate,
            LicenseCodeID:this.license.LicenseCodeID,
            LicenseRestriction: this.license.LicenseRestriction
          }
        });

        this.firestore.collection('Application').doc(res.user.uid).set(app);
        this.firestore.collection('Users').doc(res.user.uid).set({
          UserTypeID: "Driver",
          AccessRoleID:"Applicant",
          Email:this.user.Email,
        })
        res.user.sendEmailVerification()
        console.log("success ADD")
        //Calling functions that upload all the documents
        this.upload1(res.user.uid)
        this.upload2(res.user.uid)
        this.upload3(res.user.uid)
        console.log("success UPLOAD")
        window.alert('Please validate your email address. Kindly check your inbox.')
        localStorage.setItem('UmuntuId', res.user.uid);
        this.router.navigate(['/login/'])
      }
    ).catch(res=>{
      console.log(res)
    })
  }
 //Uploading files 
    //Copy of License
    selectFile(event) {
    this.selectedCOLFiles = event.target.files;
    }

    upload1(id:string)
      {
        const file = this.selectedCOLFiles.item(0);
        this.selectedCOLFiles = undefined;
        this.currentFileUpload1 = new FileUpload(file);
        this.DriverAppSev.pushFileToStorage(this.currentFileUpload1,id,"CopyOfLicense")
      }
    
     //Timetable
     selectFile2(event)
 {
      this.selectedTFiles = event.target.files;
      }
      upload2(id:string)
        {
          const file = this.selectedTFiles.item(0);
          this.selectedTFiles = undefined;
          this.currentFileUpload2 = new FileUpload(file);
          this.DriverAppSev.pushFileToStorage(this.currentFileUpload2,id,"Timetable")
        }
       //ID uploading
       selectFile3(event) {
        this.selectedIDFiles = event.target.files;
        }
        upload3(id:string)
          {
            const file = this.selectedIDFiles.item(0);
            this.selectedIDFiles = undefined;
            this.currentFileUpload3 = new FileUpload(file);
            this.DriverAppSev.pushFileToStorage(this.currentFileUpload3,id,"Identity Document")
          }
             
    
    
    
  }




