import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolRequestinfoPageRoutingModule } from './tool-requestinfo-routing.module';

import { ToolRequestinfoPage } from './tool-requestinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolRequestinfoPageRoutingModule
  ],
  declarations: [ToolRequestinfoPage]
})
export class ToolRequestinfoPageModule {}
