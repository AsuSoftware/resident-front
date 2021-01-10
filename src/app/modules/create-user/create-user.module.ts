import { UserFormComponent } from './../../common/classes/create-user/user-form/user-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from 'src/app/common/classes/create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: CreateUserComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    CreateUserComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class CreateUserModule { }
