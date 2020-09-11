import { AdminService } from './admin.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AddmodalComponent } from '../admin/addmodal/addmodal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { ModalController, AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase ,AngularFireObject} from '@angular/fire/database';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  //For searching 
  
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  toggleSearch: boolean = false;
//constructor
  constructor(private ModalCtrl:ModalController,
    private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase,
    private AdminSev:AdminService) { }

    Administrator:AngularFireObject<any>
    Administrators =[];

  ngOnInit() {
    //retrieving data to tab;e
        this.firestore.collection("Administrator").snapshotChanges().subscribe(items=>{
          this.Administrators =[];
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            this.Administrators.push(item)
          })
          console.log(this.Administrators)
        })
  }

  //modal controllers
  async openAdd() {
    const modal = await this.ModalCtrl.create({
      cssClass:"ToolAdd",
      component:AddmodalComponent
    });
    await modal.present()
  }
  //edit
  async EditModal(id) {
    console.log(id)
    const modal = await this.ModalCtrl.create({
      cssClass:"ToolAdd",
      component:EditmodalComponent,
      componentProps:{
        "id": id
      }
    });
    await modal.present()
  }
  //View 
  async View() {
    const modal = await this.ModalCtrl.create({
      cssClass:"ToolAdd",
      component:EditmodalComponent,
      componentProps: {check:true,NoButton:false}
    });
    await modal.present()
  }

  ///Alert controller
  async RemoveConfirmation(obj) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to remove this Administrator",
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
            this.Remove(obj)
          }
        }
      ]
    });

    await alert.present();
  }
//removing the admin
  Remove(item){
    this.AdminSev.Delete(item)
  }
}
