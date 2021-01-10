import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAssociationComponent } from './../../common/classes/create-association/create-association.component';
import { AssociationFormComponent } from './../../common/classes/create-association/association-form/association-form.component';

const routes: Routes = [
  {
    path: '',
    component: CreateAssociationComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [
    CreateAssociationComponent,
    AssociationFormComponent
  ]
})
export class CreateAssociationModule { }
