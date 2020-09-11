import { InspectionModalComponent } from './inspection-modal/inspection-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolManagementPageRoutingModule } from './tool-management-routing.module';

import { ToolManagementPage } from './tool-management.page';
import { AddModalComponent } from './add-modal/add-modal.component';
import {MatSelectModule} from '@angular/material/select';
import { EditModalComponent } from './editmodel/editmodel.component';
import { ToolMFilterPipe } from './tool-mfilter.pipe';
import { ComponetsModule } from 'src/app/Shared/Components.module';
import { QRCodeModule } from 'angular2-qrcode';
@NgModule({
  entryComponents: [AddModalComponent, InspectionModalComponent, EditModalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolManagementPageRoutingModule,
    MatSelectModule, ReactiveFormsModule,ComponetsModule,QRCodeModule,
  ],
  declarations: [ToolManagementPage, AddModalComponent, InspectionModalComponent, EditModalComponent,ToolMFilterPipe]
})
export class ToolManagementPageModule {}
