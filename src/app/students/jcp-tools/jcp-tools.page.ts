import { RequestmodalComponent } from './requestmodal/requestmodal.component';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { InfotoolmodalComponent } from './infotoolmodal/infotoolmodal.component';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-jcp-tools',
  templateUrl: './jcp-tools.page.html',
  styleUrls: ['./jcp-tools.page.scss'],
})
export class JcpToolsPage implements OnInit {
  Name:string;


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
 
//modal for the View button
  async open() {
    const modal = await this.ModalCtrl.create({
      component:InfotoolmodalComponent,
      cssClass:"Profile"
    });
    await modal.present()
  }
  //modal for the request button
  async openRequest(ToolId:string) {

      console.log("out",ToolId)
      const modal = await this.ModalCtrl.create({
        component:RequestmodalComponent,
        cssClass:"Requestmodal",
        componentProps:{
         "ToolId": ToolId
        }
      });
      await modal.present()
    }
    
 
  }
 
  /*async ConifrmationCancel() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want to Cancel the request of this tool?",
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
           
          }
        }
      ]
    })
    await alert.present();
  }*/
  

