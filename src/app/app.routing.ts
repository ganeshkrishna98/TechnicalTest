import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AccessLogsComponent } from './admin-panel/management/access-logs/access-logs.component';
import { DatabaseManagementComponent } from './admin-panel/management/database-management/database-management.component';
import { DeviceManagementComponent } from './admin-panel/management/device-management/device-management.component';
import { NotificationManagementComponent } from './admin-panel/management/notification-management/notification-management.component';
import { StorageManagementComponent } from './admin-panel/management/storage-management/storage-management.component';
import { UserManagementComponent } from './admin-panel/management/user-management/user-management.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentManagementComponent } from './document/document-management/document-management.component';
import { CreateDocumentComponent } from './document/create-document/create-document.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'create-document', component: CreateDocumentComponent },
  { path: 'document-management', component: DocumentManagementComponent },
  { path: 'admin-panel', component: AdminPanelComponent },
  { path: 'access-logs', component: AccessLogsComponent },
  { path: 'database-management', component: DatabaseManagementComponent },
  { path: 'device-management', component: DeviceManagementComponent },
  { path: 'notification-management', component: NotificationManagementComponent },
  { path: 'storage-management', component: StorageManagementComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'document',
    loadChildren: () => import('./features/document/document.module').then(m => m.DocumentModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
