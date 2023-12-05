import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabaseManagementRoutingModule } from './database-management-routing.module';
import { DatabaseManagementComponent } from './database-management.component';

@NgModule({
  declarations: [
    DatabaseManagementComponent
  ],
  imports: [
    CommonModule,
    DatabaseManagementRoutingModule
  ]
})
export class DatabaseManagementModule { }
