import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CPApplicationPageRoutingModule } from './cp-application-routing.module';

import { CPApplicationPage } from './cp-application.page';
import { ProjectmodalComponent } from './projectmodal/projectmodal.component';

@NgModule({
  entryComponents:[ProjectmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CPApplicationPageRoutingModule
  ],
  declarations: [CPApplicationPage,ProjectmodalComponent]
})
export class CPApplicationPageModule {}
