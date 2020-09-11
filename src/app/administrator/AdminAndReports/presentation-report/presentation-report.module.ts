import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentationReportPageRoutingModule } from './presentation-report-routing.module';

import { PresentationReportPage } from './presentation-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationReportPageRoutingModule
  ],
  declarations: [PresentationReportPage]
})
export class PresentationReportPageModule {}
