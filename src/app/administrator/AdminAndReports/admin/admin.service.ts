import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { AngularFirestore } from '@angular/fire/firestore';
import { Administrator } from '../../models/Administrator.model';
import { ConfirmedValidator } from './addmodal/Confirmed.validator';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  Administrators: AngularFireList<any>;   
  NamePattern = "^([A-z0-9À-ž\s]){2,}$";
  pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
  NumbePattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form =  this.fb.group({
    Name: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Surname: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Email: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
    ContactNumber: ['',[Validators.required,Validators.pattern(this.NumbePattern)]],
    Address: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    IDNumber: ['',[Validators.required]],
    JobTitle: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Username: ['',[Validators.required,Validators.pattern(this.NamePattern)]],
    Password: ['',[Validators.required,Validators.pattern(this.pwdPattern)]],
    confirm_password: ['', [Validators.required,Validators.pattern(this.pwdPattern)]],
  }
  ,
    {
      Validator: ConfirmedValidator('Password','confirm_password')
    })
  //constructor 
  constructor(private firestore: AngularFirestore,
    public fb: FormBuilder,
    private db: AngularFireDatabase,
    private toastController:ToastController) { }


  //Add
  AddAdminstrator(data: Administrator, id:string) {

        this.firestore
            .collection("Administrator").doc(id)
            .set({
                Name: data.Name,
                Surname: data.Surname,
                Address: data.Address,
                ContactNumber: data.ContactNumber,
                IDNumber: data.IDNumber,
                JobTitle: data.JobTitle,
                Email: data.Email,
              });
              this.firestore.collection('Users').doc(id).set({
                UserTypeID: "Admin",
                AccessRoleID:"Admin",
                Email: data.Email,
              }).then(dd=>{
                this.SuccessfullyAdded()
              })
 
  }
  //Delete the record 
  Delete(item) {
    this.firestore.doc(`Administrator/${item.id}`).delete()
    this.firestore.doc(`Users/${item.id}`).delete().then(dd=>{
      this.SuccessfullyDeleted()
    })
  }
  //Updating the admin
  updateAdmiin(data,id){
    
    this.firestore.doc(`Administrator/${id}`).update(data).then(dd=>{
      this.SuccessfullyUpdated()
    });
    
  }
  async SuccessfullyAdded() {
    const toast = await this.toastController.create({
      message: 'Administrator Added successfully',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  async SuccessfullyDeleted() {
    const toast = await this.toastController.create({
      message: 'Administrator deleted successfully',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  async SuccessfullyUpdated() {
    const toast = await this.toastController.create({
      message: 'Administrator updated successfully',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
  
}

