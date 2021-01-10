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
    path: 'create-user',
    loadChildren: () => import('./modules/create-user/create-user.module').then(m => m.CreateUserModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
