import { CNewsFeedComponent } from './c-news-feed/c-news-feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunityPartnersPage } from './community-partners.page';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityPartnersPage,
    children:[
      {
        path: 'projects',
        loadChildren: () => import('./projects/projects.module').then( m => m.ProjectsPageModule)
      },
      {
        path: 'external-students',
        loadChildren: () => import('./external-students/external-students.module').then( m => m.ExternalStudentsPageModule)
      },
      {
        path: 'documents',
        loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
      },
      {
        path: 'application-status',
        loadChildren: () => import('./Applications/application-status/application-status.module').then( m => m.ApplicationStatusPageModule)
      },
      {
        path: 'application',
        loadChildren: () => import('./Applications/application/application.module').then( m => m.ApplicationPageModule)
      },
      { path: 'NewsFeed', component: CNewsFeedComponent },
      { path: 'Home', component: HomeComponent },
      {
        path: 'students',
        loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule)
      },

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
export class CommunityPartnersPageRoutingModule {}
