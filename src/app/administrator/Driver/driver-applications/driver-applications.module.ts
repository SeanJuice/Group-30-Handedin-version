import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverApplicationsPageRoutingModule } from './driver-applications-routing.module';

import { DriverApplicationsPage } from './driver-applications.page';
import { AdminNavigationModule } from 'src/app/Shared/AdminNavigation.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverApplicationsPageRoutingModule,AdminNavigationModule
  ],
  declarations: [DriverApplicationsPage,ModalComponent],entryComponents:[ModalComponent]
})
export class DriverApplicationsPageModule {}
