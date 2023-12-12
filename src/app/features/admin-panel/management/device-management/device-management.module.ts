import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceManagementRoutingModule } from './device-management-routing.module';
import { DeviceManagementComponent } from './device-management.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DeviceManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DeviceManagementRoutingModule
  ]
})
export class DeviceManagementModule { }
