import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [NotificationComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    NotificationComponent,
    ReactiveFormsModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
