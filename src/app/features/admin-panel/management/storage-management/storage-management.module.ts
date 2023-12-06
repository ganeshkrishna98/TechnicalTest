import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageManagementRoutingModule } from './storage-management-routing.module';
import { StorageManagementComponent } from './storage-management.component';

@NgModule({
  declarations: [
    StorageManagementComponent
  ],
  imports: [
    CommonModule,
    StorageManagementRoutingModule
  ]
})
export class StorageManagementModule { }
