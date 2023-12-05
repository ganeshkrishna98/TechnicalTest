import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseManagementComponent } from './database-management.component';

const routes: Routes = [
  {
    path: '',
    component: DatabaseManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatabaseManagementRoutingModule { }
