import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccessRolesPageRoutingModule } from './access-roles-routing.module';

import { AccessRolesPage } from './access-roles.page';
import { ARmodalComponent } from './armodal/armodal.component';
import { FilterRPipe } from './filter-r.pipe';

@NgModule({
  entryComponents:[ARmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccessRolesPageRoutingModule
  ],
  declarations: [AccessRolesPage,ARmodalComponent, FilterRPipe]
})
export class AccessRolesPageModule {}
