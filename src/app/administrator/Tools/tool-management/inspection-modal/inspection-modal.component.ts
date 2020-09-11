import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-inspection-modal',
  templateUrl: './inspection-modal.component.html',
  styleUrls: ['./inspection-modal.component.scss'],
})
export class InspectionModalComponent implements OnInit {
  @Input() id: string;
  isAdd:boolean;
  constructor(private alertcontroler: AlertController, private toastController: ToastController,
    private db: AngularFirestore, public Toolsev: ToolService, private Modal: ModalController) { }
//ToolConditions
  ngOnInit() {
    this.db.collection("ToolConditions").snapshotChanges().subscribe(items => {
     
      items.forEach(a => {
        let item: any = a.payload.doc.data()
        let it: any = a.payload.doc.data()
        item.id = a.payload.doc.id;
        if(item.id == this.id)
        {
            this.isAdd = false;
            this.Toolsev.ConditonForm.setValue(it)
        }else
        {
          this.isAdd = true;
        }
      })
    })
  }

  async Confirmation(id) {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message: "Are you sure you want to inspect this tool?",
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
            let data = this.Toolsev.ConditonForm.value
            console.log(id)
           this.Toolsev.AddContion(data,this.isAdd,id)
            this.Toolsev.ConditonForm.reset()
            this.SuccesfullyAdded();

          }
        }
      ]
    });

    await alert.present();
  }

  async SuccesfullyAdded() {

    if(this.isAdd)
    {
      const toast = await this.toastController.create({
        message: 'Tool Condition Added.',
        position: "middle",
        cssClass: "MyToasts",
        duration: 2000
      });
      toast.present();
      this.dismiss()
    }
    else
    {
      const toast = await this.toastController.create({
        message: 'Tool Condition Updated.',
        position: "middle",
        cssClass: "MyToasts",
        duration: 2000
      });
      toast.present();
      this.dismiss()
    }
  
   

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }

}
