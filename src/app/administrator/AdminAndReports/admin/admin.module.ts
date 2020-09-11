import { AddmodalComponent } from '../admin/addmodal/addmodal.component';
import { EditmodalComponent } from './editmodal/editmodal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './filter.pipe';
@NgModule({
  entryComponents:[EditmodalComponent,AddmodalComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    NgbModule
  ],
  declarations: [AdminPage,EditmodalComponent,AddmodalComponent, FilterPipe]
})
export class AdminPageModule {}
