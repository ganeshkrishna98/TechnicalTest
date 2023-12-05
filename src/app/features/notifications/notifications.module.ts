import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationManagementComponent } from '../admin-panel/management/notification-management/notification-management.component';

@NgModule({
  declarations: [
    NotificationManagementComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule
  ]
})
export class NotificationsModule { }
