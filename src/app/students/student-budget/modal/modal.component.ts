import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { FileUpload } from 'src/app/register/applications/driver-application/file.model';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit { 
  @Input() TheID: any;
  CurrentFileUpload: FileUpload
  SelectedFile: FileList
  usertypes:string
  


  constructor
  (
    public BudgetService: BudgetService,
    private alertcontroler:AlertController,
    private toastController:ToastController,
    private Modal:ModalController
  ) 
    { }

    selectFile(event) {
      this.SelectedFile = event.target.files;
      }
  
      upload(data)
        {
          const id = localStorage.getItem("UmuntuId")
          const file = this.SelectedFile.item(0);
          this.SelectedFile = undefined;
          this.CurrentFileUpload = new FileUpload(file);
          console.log(data)
          this.BudgetService.pushFileToStorage(this.CurrentFileUpload , id , data,this.TheID /*The budget table id */)
        }

        ngOnInit() {console.log(this.TheID)}
        async Conifrmation(recdes: number , balance:string) {
          const alert = await this.alertcontroler.create({
            cssClass: 'alertCustomCss',
            message:"Are you sure you want add this receipt ?",
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
                  let data = this.BudgetService.form.value
                  //console.log(data)
                 this.upload(data)
                 this.SuccesfullyUploaded()
                 this.BudgetService.form.reset()
                 this.dismiss()
                }
              }
            ]
          })
          await alert.present();
        }
        async SuccesfullyUploaded() {
          const toast = await this.toastController.create({
            message: 'Your receipt is successfully uploaded',
            position:"middle",
            color:"secondary",
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
