import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProposalReportPageRoutingModule } from './proposal-report-routing.module';

import { ProposalReportPage } from './proposal-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProposalReportPageRoutingModule
  ],
  declarations: [ProposalReportPage]
})
export class ProposalReportPageModule {}
