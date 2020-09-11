import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvailablePageRoutingModule } from './available-routing.module';

import { AvailablePage } from './available.page';
import { MoreinfomodalComponent } from './moreinfomodal/moreinfomodal.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  entryComponents:[MoreinfomodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvailablePageRoutingModule
  ],
  declarations: [AvailablePage,MoreinfomodalComponent, FilterPipe]
})
export class AvailablePageModule {}
