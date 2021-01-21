import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'create-association',
    loadChildren: () => import('./modules/create-association/create-association.module').then(m => m.CreateAssociationModule),
  },
  {
    path: 'create-user/admin',
    loadChildren: () => import('./modules/create-user/create-user.module').then(m => m.CreateUserModule),
  },
  {
    path: 'create-user/user',
    loadChildren: () => import('./modules/create-user/create-user.module').then(m => m.CreateUserModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'utility-management',
    loadChildren: () => import('./modules/utility-management/utility-management.module').then(m => m.UtilityManagementModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
