import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, AlertController, ToastController } from '@ionic/angular';
import { AddmodalComponent } from '../admin/addmodal/addmodal.component';
import { ARmodalComponent } from './armodal/armodal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-access-roles',
  templateUrl: './access-roles.page.html',
  styleUrls: ['./access-roles.page.scss'],
})
export class AccessRolesPage implements OnInit {

 
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';


  constructor(private ModalCtrl:ModalController,
    private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase, private toastController:ToastController
    ) { }


    Users =[];

  ngOnInit() {
    //retrieving data to tab;e
        this.firestore.collection("Users").snapshotChanges().subscribe(items=>{
          this.Users =[];
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            this.Users.push(item)
            if(item.UserTypeID=="CommunityPartner")
            {
              this.firestore.doc(`CommunityPartners/${item.id}`).snapshotChanges().subscribe(items=>{
                let itemn:any = items.payload.data()
                console.log(item)
                item.Name= itemn.Name +" "+itemn.Surname
               //this.adminSev.form.setValue(item)
              })
            }
            else if(item.UserTypeID=="Driver")
            {
              this.firestore.doc(`Drivers/${item.id}`).snapshotChanges().subscribe(items=>{
                let itemn:any = items.payload.data()
                console.log(item)
                item.Name= itemn.Name + ""+itemn.Surname
               //this.adminSev.form.setValue(item)
              })
            }
            else if(item.UserTypeID=="Student")
            {
              this.firestore.doc(`students2/${item.id}`).snapshotChanges().subscribe(items=>{
                let itemn:any = items.payload.data()
                console.log(item)
                item.Name= itemn.Name
                item.Surname =itemn.Surname
               //this.adminSev.form.setValue(item)
              })
            }
          })
          console.log(this.Users)
        })
  }
  //modal for editing 
  async openAdd() {
      const modal = await this.ModalCtrl.create({

        component:ARmodalComponent
      });
      await modal.present()
    }

    ///comfirmation
  async MakeCP(id) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to make this person an Community Partner",
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
            this.firestore.doc(`Users/${id}`).update({
              AccessRoleID: "CommunityPartner",
              UserTypeID: "CommunityPartner"
            }).then(dd=>{
              this.SuccessfullyAdded()
            });
          }
        }
      ]
    });

    await alert.present();
  }
      ///comfirmation
      async MakeDriver(id) {
        const alert = await this.alertcontroler.create({
          cssClass: 'alertCustomCss',
          message:"Are you sure you want to make this person an Driver",
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
                this.firestore.doc(`Users/${id}`).update({
                  AccessRoleID: "Driver",
                  UserTypeID: "Driver"
                }).then(dd=>{
                  this.SuccessfullyAdded()
                });
              }
            }
          ]
        });
    
        await alert.present();
      }
          ///comfirmation
  async MakeApplicant(id) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to make this person an Applicant",
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
            this.firestore.doc(`Users/${id}`).update({
              AccessRoleID: "Applicant",
              UserTypeID: "Applicant"
            }).then(dd=>{
              this.SuccessfullyAdded()
            });
          }
        }
      ]
    });

    await alert.present();
  }
  async SuccessfullyAdded() {
    const toast = await this.toastController.create({
      message: 'successfully Changed',
      position:"middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
  }
}
