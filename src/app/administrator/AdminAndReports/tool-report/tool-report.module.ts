import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolReportPageRoutingModule } from './tool-report-routing.module';

import { ToolReportPage } from './tool-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolReportPageRoutingModule
  ],
  declarations: [ToolReportPage]
})
export class ToolReportPageModule {}
