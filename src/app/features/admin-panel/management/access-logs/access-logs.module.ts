import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessLogsRoutingModule } from './access-logs-routing.module';
import { AccessLogsComponent } from './access-logs.component';

@NgModule({
  declarations: [
    AccessLogsComponent
  ],
  imports: [
    CommonModule,
    AccessLogsRoutingModule
  ]
})
export class AccessLogsModule { }
