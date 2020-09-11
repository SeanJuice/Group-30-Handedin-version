import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApplicationPageRoutingModule } from './application-routing.module';

import { ApplicationPage } from './application.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ApplicationPageRoutingModule
  ],
  declarations: [ApplicationPage]
})
export class ApplicationPageModule {}
