import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ModalController, NavController, AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ExStudentService } from './exStudent.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase ,AngularFireObject} from '@angular/fire/database';
import { CertificateComponent } from './certificate/certificate.component';

@Component({
  selector: 'app-external-students',
  templateUrl: './external-students.page.html',
  styleUrls: ['./external-students.page.scss'],
})
export class ExternalStudentsPage implements OnInit {
  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  toggleSearch: boolean = false;

  constructor(private ModalCtrl:ModalController,
    private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase,
    private exStudentService:ExStudentService) {
    
  }

  exStudent:AngularFireObject<any>
  exStudents =[];

 ngOnInit() {
      //retrieving data to tab;e
      this.firestore.collection("External Students").snapshotChanges().subscribe(items=>{
        this.exStudents =[];
        items.forEach(a=>{
          let item:any = a.payload.doc.data()
          item.id = a.payload.doc.id;
          if(item.CommunityPartnerID==localStorage.getItem("UmuntuId"))
          {
            this.exStudents.push(item)
          }
          
        })
        console.log(this.exStudents)
      })

 }
 ///////

  Show()
  {}
 async open() {
   const modal = await this.ModalCtrl.create({
     component:ModalComponent
   });
   await modal.present()
 }
 async openAdd() {
  const modal = await this.ModalCtrl.create({
    cssClass:"ToolAdd",
    component:AddModalComponent
  });
  await modal.present()
}

//edit
async EditModal(id) {
  console.log(id)
  const modal = await this.ModalCtrl.create({
    cssClass:"ToolAdd",
    component:ModalComponent,
    componentProps:{
      "id": id
    }
  });
  await modal.present()
}

//Generate
async gen(id) {
  console.log(id)
  const modal = await this.ModalCtrl.create({
    cssClass:"certificate",
    component:CertificateComponent,
    componentProps:{
      "id": id
    }
  });
  await modal.present()
}
 ///Delete
 async DeleteStudent(obj) {
  const alert = await this.alertcontroler.create({
    cssClass: 'alertCustomCss',
    message:"Are you sure you want to remove this student?",
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
          this.Remove(obj);
        }
      }
    ]
  });

  await alert.present();
}
/*async SuccesfullyDeleted() {
  const toast = await this.toastController.create({
    message: 'Project Successfully removed .',
    position:"middle",
    color:"secondary",
    duration: 2000
  });
  toast.present();
}*/

//removing the admin
Remove(item){
this.exStudentService.Delete(item)
}
}
