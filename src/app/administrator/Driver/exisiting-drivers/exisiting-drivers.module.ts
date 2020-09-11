import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExisitingDriversPageRoutingModule } from './exisiting-drivers-routing.module';

import { ExisitingDriversPage } from './exisiting-drivers.page';
import { ModalComponent } from './modal/modal.component';
import { AdminNavigationModule } from 'src/app/Shared/AdminNavigation.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExisitingDriversPageRoutingModule,AdminNavigationModule 
  ],
  declarations: [ExisitingDriversPage,ModalComponent],entryComponents:[ModalComponent]
})
export class ExisitingDriversPageModule {}
