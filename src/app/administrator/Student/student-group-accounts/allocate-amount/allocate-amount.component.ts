import { AlertController, ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-allocate-amount',
  templateUrl: './allocate-amount.component.html',
  styleUrls: ['./allocate-amount.component.scss'],
})
export class AllocateAmountComponent implements OnInit {

  constructor(private AmountService:AccountsService,
              private alertcontroler:AlertController,
              private Modal:ModalController) { }

  ngOnInit() {}
  async Confirmation(Balance:number,GroupNo:number)
  {

      const alert = await this.alertcontroler.create({
        cssClass: 'alertCustomCss',
        message:`Are you sure you allocate amount to Group ${GroupNo} ?`,
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
                  
              this.AmountService.AllocateAmount(Balance,GroupNo)
              console.log(Balance," ",GroupNo);
            }
          }
        ]
      });
  
      await alert.present();
    }
    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.Modal.dismiss({
        'dismissed': true
      });
    }
  
}
