import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilityManagementComponent } from './utility-management.component';

const routes: Routes = [
  {
    path: '',
    component: UtilityManagementComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [UtilityManagementComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UtilityManagementModule { }
