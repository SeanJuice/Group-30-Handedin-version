import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Driver } from '../../models/driver.model';
import { License } from '../../models/License.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { ApplicationService } from './application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.page.html',
  styleUrls: ['./application.page.scss'],
})
export class ApplicationPage implements OnInit {
  driver:Driver = new Driver();
  license:License = new License();
  ApplicantOrDriver = false;
  constructor(private firestore: AngularFirestore, private DriverSev:ApplicationService, private alertController:AlertController) { }

  ngOnInit() {
    
    //fill details of the driver to the fields
    const id = localStorage.getItem("UmuntuId")
    this.firestore.doc(`Drivers/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
   
      this.driver.Name = item.Name;
      this.driver.Surname = item.Surname;
      this.license.ExpiryDate = item.DriverLicense.ExpiryDate;
      this.license.LicenseCodeID = item.DriverLicense.LicenseCodeID;
      this.license.LicenseRestriction = item.DriverLicense.LicenseRestriction;
      console.log("here",this.license)
    
    })
    //check if the driver is an applicant or a Normal driver 
    this.firestore.collection("Application").snapshotChanges().subscribe(items=>{
          
      items.forEach(a=>{
        let item:any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.id === id)
        {
            this.ApplicantOrDriver=true;
        }
      })
     
    })
  }

  async onSubmit() {

        const alert = await this.alertController.create({
          cssClass: 'alertCustomCss',
          header: 'Confirm!',
          message: 'Are you sure you want to change your details?',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: (blah) => {
                console.log(' Cancel: blah');
              //  this.Show=false
              }
            }, {
              text: 'Yes',
              handler: () => {
                this.Update()
              }
            }
          ]
        });
    
        await alert.present();
      
    
    }

  Update(){
    const id = localStorage.getItem("UmuntuId")
  this.DriverSev.updateDriverDetails(this.license,this.driver,id)
  }

}
