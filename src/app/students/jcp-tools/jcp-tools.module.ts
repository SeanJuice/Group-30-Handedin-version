import { ComponetsModule } from './../../Shared/Components.module';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JcpToolsPageRoutingModule } from './jcp-tools-routing.module';

import { JcpToolsPage } from './jcp-tools.page';
import { InfotoolmodalComponent } from './infotoolmodal/infotoolmodal.component';
import { RequestmodalComponent } from './requestmodal/requestmodal.component';
import { ToolMFilterPipe } from 'src/app/administrator/Tools/tool-management/tool-mfilter.pipe';

@NgModule({
  entryComponents:[InfotoolmodalComponent,RequestmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JcpToolsPageRoutingModule,ReactiveFormsModule,ComponetsModule
  ],
  declarations: [JcpToolsPage,InfotoolmodalComponent,RequestmodalComponent,ToolMFilterPipe],
  //providers:[DatePipe]
})
export class JcpToolsPageModule {}
