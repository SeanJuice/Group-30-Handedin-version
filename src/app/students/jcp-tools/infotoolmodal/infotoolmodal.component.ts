import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-infotoolmodal',
  templateUrl: './infotoolmodal.component.html',
  styleUrls: ['./infotoolmodal.component.scss'],
})
export class InfotoolmodalComponent implements OnInit {

  constructor(private ModalCtrl:ModalController) { }

  ngOnInit() {}
  closeModal() { this.ModalCtrl.dismiss(); }
}
