import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { BudgetService } from './budget.service';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-student-budget',
  templateUrl: './student-budget.page.html',
  styleUrls: ['./student-budget.page.scss'],
})
export class StudentBudgetPage implements OnInit {
isBig:boolean

  constructor( private firestore: AngularFirestore,
    private alertcontroler:AlertController,
    private ModalCtrl:ModalController,
    private BudgetService: BudgetService
    ) {
    this.isBig=false;
   }

   Receipts =[];

   currentFileUpload: FileUpload
   selectedFile: FileList
   @Input() fileUpload: FileUpload

   FinancialValues ={
    StudentGroupNo: 0,
    TheBalance:0,
   TheID: ""
   }
   StudentGroupNo:any
   TheBalance:any;
   TheID:string
  ngOnInit() { 
    const id = localStorage.getItem("UmuntuId")
    //Retrive student Group

    this.firestore.doc(`students2/${id}`).snapshotChanges().subscribe(items=>{
      let item:any = items.payload.data()
      console.log(item)
      this.FinancialValues.StudentGroupNo = item.GroupNumber
      this.firestore.collection("GroupFunds").snapshotChanges().subscribe(items=>{
        items.forEach(a=>{
          let itemm:any = a.payload.doc.data()
          this.FinancialValues.TheID = a.payload.doc.id;
          if(itemm.GroupNo == item.GroupNumber)
          {
            this.FinancialValues.TheBalance= itemm.RemainingBalance
          }
        })
        
      })
     //this.adminSev.form.setValue(item)
    })
 
  
    //retrieving data to table

        this.firestore.collection("StudentReceipts").snapshotChanges().subscribe(items=>{
          this.Receipts =[];
          items.forEach(a=>{
            let item:any = a.payload.doc.data()
            item.id = a.payload.doc.id;
            if(item.userId == id)
            this.Receipts.push(item)
          })
         // console.log(this.Receipts)
        })
      }
    

  async open() {
    const modal = await this.ModalCtrl.create({
      component:ModalComponent,
      cssClass:"Profile",
      componentProps:{
        TheID:  this.FinancialValues
      }
    });
    await modal.present()
  }

  async Conifrmation(id , Url) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message:"Are you sure you want remove this document?",
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
            this.BudgetService.RemoveReceipt(id,Url)
          }
        }
      ]
    })
    await alert.present();
  }

  
}
