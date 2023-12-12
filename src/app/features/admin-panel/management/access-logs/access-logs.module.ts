import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessLogsRoutingModule } from './access-logs-routing.module';
import { AccessLogsComponent } from './access-logs.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccessLogsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccessLogsRoutingModule
  ]
})
export class AccessLogsModule { }
