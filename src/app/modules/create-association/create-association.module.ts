import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateAssociationComponent } from './../../common/classes/create-association/create-association.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAssociationComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CreateAssociationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateAssociationModule { }
