import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CreateDocumentComponent } from 'app/document/create-document/create-document.component';
import { DocumentManagementComponent } from 'app/document/document-management/document-management.component';
import { AdminPanelComponent } from 'app/admin-panel/admin-panel.component';
import { AccessLogsComponent } from 'app/admin-panel/management/access-logs/access-logs.component';
import { DatabaseManagementComponent } from 'app/admin-panel/management/database-management/database-management.component';
import { DeviceManagementComponent } from 'app/admin-panel/management/device-management/device-management.component';
import { NotificationManagementComponent } from 'app/admin-panel/management/notification-management/notification-management.component';
import { StorageManagementComponent } from 'app/admin-panel/management/storage-management/storage-management.component';
import { UserManagementComponent } from 'app/admin-panel/management/user-management/user-management.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/guards/auth.guard';

export const AdminLayoutRoutes: Routes = [   
    { path: 'dashboard',      component: DashboardComponent,canActivate : [AuthGuard] },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'create-document', component: CreateDocumentComponent},
    { path: 'document-management', component: DocumentManagementComponent},
    { path: 'admin-panel', component: AdminPanelComponent},
    { path: 'access-logs', component: AccessLogsComponent},
    { path: 'database-management', component: DatabaseManagementComponent},
    { path: 'device-management', component: DeviceManagementComponent},
    { path: 'notification-management', component: NotificationManagementComponent},
    { path: 'storage-management', component: StorageManagementComponent},
    { path: 'user-management', component: UserManagementComponent},
    { path: 'login', component: LoginComponent}
];
