import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageManagementRoutingModule } from './storage-management-routing.module';
import { StorageManagementComponent } from './storage-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StorageManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StorageManagementRoutingModule
  ]
})
export class StorageManagementModule { }
