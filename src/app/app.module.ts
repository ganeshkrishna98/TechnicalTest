import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateDocumentComponent } from './document/create-document/create-document.component';
import { EditDocumentComponent } from './document/edit-document/edit-document.component';
import { DeleteDocumentComponent } from './document/delete-document/delete-document.component';
import { ApproveDocumentComponent } from './document/approve-document/approve-document.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserManagementComponent } from './admin-panel/management/user-management/user-management.component';
import { DatabaseManagementComponent } from './admin-panel/management/database-management/database-management.component';
import { DeviceManagementComponent } from './admin-panel/management/device-management/device-management.component';
import { NotificationManagementComponent } from './admin-panel/management/notification-management/notification-management.component';
import { StorageManagementComponent } from './admin-panel/management/storage-management/storage-management.component';
import { AccessLogsComponent } from './admin-panel/management/access-logs/access-logs.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { InterceptorService } from './utils/interceptor/interceptor.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    CreateDocumentComponent,
    EditDocumentComponent,
    DeleteDocumentComponent,
    ApproveDocumentComponent,
    AdminPanelComponent,
    UserManagementComponent,
    DatabaseManagementComponent,
    DeviceManagementComponent,
    NotificationManagementComponent,
    StorageManagementComponent,
    AccessLogsComponent,
    LoginComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
