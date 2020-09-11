import { Router } from '@angular/router';
import { ModalController, NavController, AlertController, ToastController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ProjectService } from './project.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase ,AngularFireObject} from '@angular/fire/database';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {

  @ViewChild('searchbar',{static: true}) searchbar: ElementRef;
  searchText = '';
  toggleSearch: boolean = false;

  constructor( private ModalCtrl:ModalController,
    private alertcontroler:AlertController,
    private firestore: AngularFirestore,
    private db:AngularFireDatabase,
    private projectService:ProjectService) {
    
  }

  project:AngularFireObject<any>
  projects =[];
  id=localStorage.getItem("UmuntuId");

 ngOnInit() {
   //retrieving data to tab;e
   this.firestore.collection("Projects").snapshotChanges().subscribe(items=>{
    this.projects =[];
    items.forEach(a=>{
      let item:any = a.payload.doc.data()
      item.id = a.payload.doc.id;
      if(item.CommunityPartnerID==this.id )
            {
              this.projects.push(item)
            }
      
    })
    console.log(this.projects)
  })

 }
 ///////
 //modal controllers
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




 //////

  Show()
  {}
 async open() {
   const modal = await this.ModalCtrl.create({
     component:ModalComponent
   });
   await modal.present()
 }

 ///Delete
    async DeleteProject(obj) {
      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:"Are you sure you want to remove the project?",
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
    this.projectService.Delete(item)
  }

}
