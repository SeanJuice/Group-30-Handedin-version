import { HomeComponent } from '../students/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentsPage } from './students.page';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
//import { BookingsComponent } from './bookings/bookings.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsPage,
    children:[
      {
        path: 'student-projects',
        loadChildren: () => import('./student-projects/student-projects.module').then( m => m.StudentProjectsPageModule)
      },
      {
        path: 'book-trip',
        loadChildren: () => import('./book-trip/book-trip.module').then( m => m.BookTripPageModule)
      },
      {
        path: 'jcp-tools',
        loadChildren: () => import('./jcp-tools/jcp-tools.module').then( m => m.JcpToolsPageModule)
      },
      {
        path: 'student-profile',
        loadChildren: () => import('./student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
      },
      {
        path: 'student-projectinfo',
        loadChildren: () => import('./student-projectinfo/student-projectinfo.module').then( m => m.StudentProjectinfoPageModule)
      },
      {
        path: 'student-project-tripinfo',
        loadChildren: () => import('./student-project-tripinfo/student-project-tripinfo.module').then( m => m.StudentProjectTripinfoPageModule)
      },
      {
        path: 'student-budget',
        loadChildren: () => import('./student-budget/student-budget.module').then( m => m.StudentBudgetPageModule)
      },
      {
        path: 'student-documents',
        loadChildren: () => import('./student-documents/student-documents.module').then( m => m.StudentDocumentsPageModule)
      },
      { path: 'NewsFeed', component: NewsfeedComponent },
      { path: 'Home', component: HomeComponent },
      {
        path: 'tool-requestinfo',
        loadChildren: () => import('./tool-requestinfo/tool-requestinfo.module').then( m => m.ToolRequestinfoPageModule)
      },
    ]
  },
  

  
  //{ path: 'bookings', component: BookingsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsPageRoutingModule {}
