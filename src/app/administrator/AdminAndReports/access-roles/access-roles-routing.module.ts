import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccessRolesPage } from './access-roles.page';

const routes: Routes = [
  {
    path: '',
    component: AccessRolesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessRolesPageRoutingModule {}
