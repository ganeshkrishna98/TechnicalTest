import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageManagementComponent } from './storage-management.component';

const routes: Routes = [
  {
    path: '',
    component: StorageManagementComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageManagementRoutingModule { }
