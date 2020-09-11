import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExistingCPPageRoutingModule } from './existing-cp-routing.module';

import { ExistingCPPage } from './existing-cp.page';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from '../cp-applications/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExistingCPPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ExistingCPPage,ModalComponent,FilterPipe],entryComponents:[ModalComponent]
})
export class ExistingCPPageModule {}
