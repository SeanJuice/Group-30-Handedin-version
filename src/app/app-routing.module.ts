

import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClaimFormComponent } from './administrator/Finance/claim-form/claim-form.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { map } from "rxjs/operators";

const  redirectLogginToProfile =() =>  map(user=>user?['driver']:true);

const RedirectUnauthorisedToLogin=() =>redirectUnauthorizedTo([''])
const id = localStorage.getItem("UmuntuId")
const OnlyAllowSelf = next => map(
  user=>(!!user && id ==(user as any).uid) ||['']
)
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   canActivate:[AngularFireAuthGuard],
    //data:{authGuardPipe:}


  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login/register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
  ,
  {
    path: 'community-partners',
    loadChildren: () => import('./community-partners/community-partners.module').then( m => m.CommunityPartnersPageModule),

    canActivate:[AngularFireAuthGuard],  
    data:{authGuardPipe: RedirectUnauthorisedToLogin}
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then( m => m.StudentsPageModule),

    canActivate:[AngularFireAuthGuard],
   
    data:{authGuardPipe: RedirectUnauthorisedToLogin}
  },
  {
    path: 'administrator',
    loadChildren: () => import('./administrator/administrator.module').then( m => m.AdministratorPageModule),
    canActivate:[AngularFireAuthGuard],  
    data:{authGuardPipe: RedirectUnauthorisedToLogin}
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then( m => m.DriverPageModule),
    canActivate:[AngularFireAuthGuard],  
    data:{authGuardPipe: RedirectUnauthorisedToLogin}

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
