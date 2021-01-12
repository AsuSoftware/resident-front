import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateUserComponent } from 'src/app/modules/create-user/create-user.component';
import { CreateUserService } from './services/create-user.service';

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
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers: [CreateUserService]
})
export class CreateUserModule { }
