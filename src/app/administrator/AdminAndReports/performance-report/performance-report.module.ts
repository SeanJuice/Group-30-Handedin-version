import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformanceReportPageRoutingModule } from './performance-report-routing.module';

import { PerformanceReportPage } from './performance-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerformanceReportPageRoutingModule
  ],
  declarations: [PerformanceReportPage]
})
export class PerformanceReportPageModule {}
