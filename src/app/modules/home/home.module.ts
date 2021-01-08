import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './../../common/classes/home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'create-association',
    loadChildren: () => import('./../create-association/create-association.module').then(m => m.CreateAssociationModule),
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
