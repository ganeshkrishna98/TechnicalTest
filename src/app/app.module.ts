import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
