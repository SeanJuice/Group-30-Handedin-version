import { ImportInfoComponent } from './ImportInformation/import-info/import-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministratorPageRoutingModule } from './administrator-routing.module';
import { ComponetsModule } from "../Shared/Components.module";
import { AdministratorPage } from './administrator.page';
import { NavigationComponent } from './navigation/navigation.component';
import { AdminNavigationModule } from '../Shared/AdminNavigation.module';


import { ModalComponent } from './Driver/driver-applications/modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ToolRequestsComponent } from './Tools/tool-requests/tool-requests.component';
import { ClaimFormComponent } from './Finance/claim-form/claim-form.component';

import { MaintenanceComponent } from './Maintenace/maintenance/maintenance.component';
import { FinancialDocumentsComponent } from './Finance/financial-documents/financial-documents.component';
import { SetReminderComponent } from './Finance/set-reminder/set-reminder.component';
import { GradesComponent } from './Student/grades/grades.component';
import { HomeComponent } from './home/home.component';
import { ToolMFilterPipe } from './Tools/tool-management/tool-mfilter.pipe';
import { StudentFilterPipe } from './Student/student-filter.pipe';
import { RequestFilterPipe } from './Tools/tool-requests/request-filter.pipe';

@NgModule({
  imports: [
    
    CommonModule,
    FormsModule,
    IonicModule,
    AdministratorPageRoutingModule,ComponetsModule,AdminNavigationModule ,ReactiveFormsModule
  ],
  declarations: [AdministratorPage,ToolRequestsComponent,
    ClaimFormComponent,MaintenanceComponent,FinancialDocumentsComponent,ImportInfoComponent,SetReminderComponent,GradesComponent,
    HomeComponent, StudentFilterPipe, RequestFilterPipe
  ]
})  
export class AdministratorPageModule {}
