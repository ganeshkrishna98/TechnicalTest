import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationManagementRoutingModule } from './notification-management-routing.module';
import { NotificationManagementComponent } from './notification-management.component';

@NgModule({
  declarations: [
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    NotificationManagementRoutingModule
  ]
})
export class NotificationManagementModule { }
