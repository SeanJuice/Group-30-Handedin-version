import { InspectionModalComponent } from './inspection-modal/inspection-modal.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { AddModalComponent } from './add-modal/add-modal.component';
import { EditModalComponent } from './editmodel/editmodel.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tool-management',
  templateUrl: './tool-management.page.html',
  styleUrls: ['./tool-management.page.scss'],
})
export class ToolManagementPage implements OnInit {

  constructor(public alertcontroler: AlertController,public toastController: ToastController,private ModalCtrl:ModalController,
    private db: AngularFirestore) { }
  @ViewChild('searchbar', { static: true }) searchbar: ElementRef;
  searchText = '';

 Categories:boolean
 tableShow:boolean
 TheCategory:string
 Tools = []
  ngOnInit() {
    this.Categories = true;
    this.tableShow =false;

  }


 ShowTables(Number,category){
   

  switch(Number){
    case 0:{
      this.Categories=false;
      this.tableShow =true;
      this.TheCategory = category
      break;
    }
    case 1:{
      this.Categories=false;
      this.tableShow =true;
      this.TheCategory = category;
      console.log("here",this.TheCategory)
      break;
    }
    case 2:{
      this.Categories=false;
      this.tableShow =true;
      this.TheCategory = category
      break;
    }
    case 3:{
      this.Categories=false;
      this.tableShow =true;
      this.TheCategory = category
      break;
    }

  }
  if(this.tableShow && this.TheCategory != "")
  {
    //if(item.Status == "Available" && item.Category == this.TheCategory )

    
    this.db.collection("Tools").snapshotChanges().subscribe(items => {
      this.Tools = []
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        item.id = a.payload.doc.id;

        this.db.collection("ToolConditions").snapshotChanges().subscribe(items => {
          items.forEach(a => {
            let ite: any = a.payload.doc.data()
            ite.id = a.payload.doc.id;
            if (ite.id == item.id) {
              item.ConditionID = ite.Condition
            }
            else {
              item.ConditionID = "Not Available"
            }

          })
        })

        if(item.ToolStatusID == "Available" && item.CatergoryID == this.TheCategory )
        {
          this.Tools.push(item)
        }
        
      })
    })
    
  }


}
  async openAdd() {
    const modal = await this.ModalCtrl.create({
      cssClass:"ToolAdd",
      component:AddModalComponent
    });
    await modal.present()
  }
  async openCondition(toolId) {
    const modal = await this.ModalCtrl.create({
      cssClass:"",
      component:InspectionModalComponent,
      componentProps: {
        id: toolId
      }
    });
    await modal.present()
  }
  async openUpdate(toolId) {
    const modal = await this.ModalCtrl.create({
      cssClass: "ToolAdd",
      component: EditModalComponent,
      componentProps:{
        id:toolId
      }
    });
    await modal.present()
  }
}
