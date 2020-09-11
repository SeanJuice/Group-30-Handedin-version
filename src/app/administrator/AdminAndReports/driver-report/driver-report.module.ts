import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverReportPageRoutingModule } from './driver-report-routing.module';

import { DriverReportPage } from './driver-report.page';
import { ComponetsModule } from 'src/app/Shared/Components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverReportPageRoutingModule,
    ComponetsModule
  ],
  declarations: [DriverReportPage]
})
export class DriverReportPageModule {}
