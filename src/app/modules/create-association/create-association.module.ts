import { CreateAssociationService } from './services/create-association.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAssociationComponent } from './create-association.component';

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
  ],
  providers: [CreateAssociationService]
})
export class CreateAssociationModule { }
