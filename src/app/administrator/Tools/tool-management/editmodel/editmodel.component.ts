import { Component, OnInit, Input } from '@angular/core';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToolService } from '../tool.service';
import { Tool } from '../../models/tool.model';

@Component({
  selector: 'app-editmodel',
  templateUrl: './editmodel.component.html',
  styleUrls: ['./editmodel.component.scss'],
})
export class EditModalComponent implements OnInit {
  @Input() id: string;
  tools = [];
  firestore: any;
  constructor(private alertcontroler: AlertController, private toastController: ToastController, 
    private db: AngularFirestore, public Toolsev: ToolService,private Modal:ModalController) { }
  EditToolScreen: boolean;

  ngOnInit() {
 
    this.db.doc(`Tools/${this.id}`).snapshotChanges().subscribe(items => {
      let item: any = items.payload.data()
      console.log(item)
      this.Toolsev.form.setValue(item)
      

    })
  }
  async Confirmation() {
    const alert = await this.alertcontroler.create({
      cssClass: 'alertCustomCss',
      message: "Are you sure you want to update the0 tool info ?",
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
            let data: Tool = this.Toolsev.form.value
            this.Toolsev.form.reset()
            console.log(data)
            this.Toolsev.updateTool(data, this.id)
            this.SuccesfullyEdited()
            this.dismiss()
            

          }
        }
      ]
    });

    await alert.present();
  }

  async SuccesfullyEdited() {
    const toast = await this.toastController.create({
      message: 'Update successful.',
      position: "middle",
      cssClass: "MyToasts",
      duration: 2000
    });
    toast.present();
   
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.Modal.dismiss({
      'dismissed': true
    });
  }
}
