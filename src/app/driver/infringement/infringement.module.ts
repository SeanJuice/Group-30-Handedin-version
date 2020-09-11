import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfringementPageRoutingModule } from './infringement-routing.module';

import { InfringementPage } from './infringement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfringementPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InfringementPage]
})
export class InfringementPageModule {}
