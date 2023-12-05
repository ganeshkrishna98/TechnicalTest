import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceManagementRoutingModule } from './device-management-routing.module';
import { DeviceManagementComponent } from './device-management.component';

@NgModule({
  declarations: [
    DeviceManagementComponent
  ],
  imports: [
    CommonModule,
    DeviceManagementRoutingModule
  ]
})
export class DeviceManagementModule { }
