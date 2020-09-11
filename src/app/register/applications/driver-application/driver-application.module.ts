import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverApplicationPageRoutingModule } from './driver-application-routing.module';

import { DriverApplicationPage } from './driver-application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverApplicationPageRoutingModule
  ],
  declarations: [DriverApplicationPage]
})
export class DriverApplicationPageModule {}
