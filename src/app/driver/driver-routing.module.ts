import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverPage } from './driver.page';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const routes: Routes = [{
    path: '',
    component: DriverPage,
    children:[  
              {
                path: 'infringement',
                loadChildren: () => import('./infringement/infringement.module').then( m => m.InfringementPageModule)
              },
              {
                path: 'documents',
                loadChildren: () => import('./documents/documents.module').then( m => m.DocumentsPageModule)
              },
              {
                path: 'application',
                loadChildren: () => import('./Applications/application/application.module').then( m => m.ApplicationPageModule)
              },
              {
                path: 'application-status',
                loadChildren: () => import('./Applications/application-status/application-status.module').then( m => m.ApplicationStatusPageModule)
              },
              {
                path: 'schaduled-trips',
                loadChildren: () => import('./schadules/schaduled-trips/schaduled-trips.module').then( m => m.SchaduledTripsPageModule)
              },
              {
                path: 'available-trips',
                loadChildren: () => import('./schadules/available-trips/available-trips.module').then( m => m.AvailableTripsPageModule)
              },
              { path: 'NewsFeed', component: NewsfeedComponent },
              { path: 'Home', component: HomeComponent },
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
export class DriverPageRoutingModule {}
