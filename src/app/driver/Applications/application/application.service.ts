import { ToastController } from '@ionic/angular';
import { Driver } from './../../models/driver.model';
import { License } from './../../models/License.model';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  

  constructor(private firestore: AngularFirestore,private toastController:ToastController) { }

  updateDriverDetails(Lic:License,driver:Driver,id:string){
    
    this.firestore.doc(`Drivers/${id}`).update({
      DriverLicense:{
        ExpiryDate: Lic.ExpiryDate ,
        LicenseCodeID:Lic.LicenseCodeID,
        LicenseRestriction: Lic.LicenseRestriction,
      },
      Name: driver.Name,
      Surname: driver.Surname
      
    });
    console.log("success")
    }
    async Updated() {
      const toast = await this.toastController.create({
        message: 'successfully updated.',
        position:"middle",
        cssClass: "MyToasts",
        duration: 2000
      });
      toast.present();
    }
}
