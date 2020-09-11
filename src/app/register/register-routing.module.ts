import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterPage } from './register.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPage
  },
  {
    path: 'driver-application',
    loadChildren: () => import('./applications/driver-application/driver-application.module').then( m => m.DriverApplicationPageModule)
  },
  {
    path: 'cp-application',
    loadChildren: () => import('./applications/cp-application/cp-application.module').then( m => m.CPApplicationPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterPageRoutingModule {}
