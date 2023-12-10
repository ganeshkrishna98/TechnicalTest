import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDocumentRoutingModule } from './create-document-routing.module';
import { CreateDocumentComponent } from './create-document.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateDocumentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateDocumentRoutingModule
  ]
})
export class CreateDocumentModule { }
