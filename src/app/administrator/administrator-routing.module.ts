import { FinancialDocumentsComponent } from './Finance/financial-documents/financial-documents.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorPage } from './administrator.page';
import { ToolRequestsComponent } from './Tools/tool-requests/tool-requests.component';
import { ClaimFormComponent } from './Finance/claim-form/claim-form.component';
import { MaintenanceComponent } from './Maintenace/maintenance/maintenance.component';

import { ImportInfoComponent } from './ImportInformation/import-info/import-info.component';
import { SetReminderComponent } from './Finance/set-reminder/set-reminder.component';

import { GradesComponent } from './Student/grades/grades.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: AdministratorPage,
    children:[
      {
        path: 'driver-applications',
        loadChildren: () => import('./Driver/driver-applications/driver-applications.module').then( m => m.DriverApplicationsPageModule)
      },
      {
        path: 'exisiting-drivers',
        loadChildren: () => import('./Driver/exisiting-drivers/exisiting-drivers.module').then( m => m.ExisitingDriversPageModule)
      },
      { path: 'ToolRequest', component: ToolRequestsComponent },
      { path: 'ClaimForm', component: ClaimFormComponent },
      { path: 'Maintainance', component: MaintenanceComponent },
      { path: 'FinancialDocuments', component: FinancialDocumentsComponent },
      { path: 'ImportInformation', component: ImportInfoComponent },
      { path: 'SetProfileReminder', component: SetReminderComponent },
      { path: 'StudentGrades', component: GradesComponent },
      { path: 'Home', component: HomeComponent },
      {
        path: 'cp-applications',
        loadChildren: () => import('./CommunityPartner/cp-applications/cp-applications.module').then( m => m.CpApplicationsPageModule)
      },
      {
        path: 'existing-cp',
        loadChildren: () => import('./CommunityPartner/existing-cp/existing-cp.module').then( m => m.ExistingCPPageModule)
      },
      {
        path: 'navbar',
        loadChildren: () => import('./navigation/navbar/navbar.module').then( m => m.NavbarPageModule)
      },
      {
        path: 'possible-projects',
        loadChildren: () => import('./CommunityPartner/possible-projects/possible-projects.module').then( m => m.PossibleProjectsPageModule)
      },
      {
        path: 'student-group-accounts',
        loadChildren: () => import('./Student/student-group-accounts/student-group-accounts.module').then( m => m.StudentGroupAccountsPageModule)
      },
      {
        path: 'students-accounts',
        loadChildren: () => import('./Student/students-documents/students-documents.module').then( m => m.StudentsDocumentsPageModule)
      },
      {
        path: 'tool-management',
        loadChildren: () => import('./Tools/tool-management/tool-management.module').then( m => m.ToolManagementPageModule)
      },
      {
        path: 'student-group',
        loadChildren: () => import('./Student/student-group/student-group.module').then( m => m.StudentGroupPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./AdminAndReports/admin/admin.module').then( m => m.AdminPageModule)
      },
      {
        path: 'tool-report',
        loadChildren: () => import('./AdminAndReports/tool-report/tool-report.module').then( m => m.ToolReportPageModule)
      },
      {
        path: 'performance-report',
        loadChildren: () => import('./AdminAndReports/performance-report/performance-report.module').then( m => m.PerformanceReportPageModule)
      },
      {
        path: 'driver-report',
        loadChildren: () => import('./AdminAndReports/driver-report/driver-report.module').then( m => m.DriverReportPageModule)
      },
      {
        path: 'proposal-report',
        loadChildren: () => import('./AdminAndReports/proposal-report/proposal-report.module').then( m => m.ProposalReportPageModule)
      },
      {
        path: 'presentation-report',
        loadChildren: () => import('./AdminAndReports/presentation-report/presentation-report.module').then( m => m.PresentationReportPageModule)
      },
      {
        path: 'news-feeds',
        loadChildren: () => import('./Newsfeed/news-feeds/news-feeds.module').then( m => m.NewsFeedsPageModule)
      },
      {
        path: 'access-roles',
        loadChildren: () => import('./AdminAndReports/access-roles/access-roles.module').then( m => m.AccessRolesPageModule)
      },
      {
        path: 'available-projects',
        loadChildren: () => import('./CommunityPartner/available/available.module').then( m => m.AvailablePageModule)
      }

    ]
  },
  {
    path: '',
    redirectTo:"home",
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministratorPageRoutingModule {}
