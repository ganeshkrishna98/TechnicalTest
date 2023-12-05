import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminPanelComponent } from './features/admin-panel/admin-panel.component';
import { AccessLogsComponent } from './features/admin-panel/management/access-logs/access-logs.component';
import { DatabaseManagementComponent } from './features/admin-panel/management/database-management/database-management.component';
import { DeviceManagementComponent } from './features/admin-panel/management/device-management/device-management.component';
import { NotificationManagementComponent } from './features/admin-panel/management/notification-management/notification-management.component';
import { StorageManagementComponent } from './features/admin-panel/management/storage-management/storage-management.component';
import { UserManagementComponent } from './features/admin-panel/management/user-management/user-management.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DocumentManagementComponent } from './document/document-management/document-management.component';
import { CreateDocumentComponent } from './document/create-document/create-document.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './features/login/login.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  { path: 'dashboard', 
  loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule), 
  canActivate: [AuthGuard] 
  },
  { path: 'user-profile',
  loadChildren: () => import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  { path: 'notifications',
  loadChildren: () => import('./features/notifications/notifications.module').then(m => m.NotificationsModule)
  },
  { path: 'create-document',
   component: CreateDocumentComponent 
  },
  { path: 'document-management',
   component: DocumentManagementComponent 
  },
  { path: 'admin-panel',
  loadChildren: () => import('./features/admin-panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  { path: 'access-logs',
  loadChildren: () => import('./features/admin-panel/management/access-logs/access-logs.module').then(m => m.AccessLogsModule)
  },
  { path: 'database-management',
  loadChildren: () => import('./features/admin-panel/management/database-management/database-management.module').then(m => m.DatabaseManagementModule)
  },
  { path: 'device-management',
  loadChildren: () => import('./features/admin-panel/management/device-management/device-management.module').then(m => m.DeviceManagementModule)
  },
  { path: 'notification-management',
  loadChildren: () => import('./features/admin-panel/management/notification-management/notification-management.module').then(m => m.NotificationManagementModule)
  },
  { path: 'storage-management',
  loadChildren: () => import('./features/admin-panel/management/storage-management/storage-management.module').then(m => m.StorageManagementModule)
  },
  { path: 'user-management',
  loadChildren: () => import('./features/admin-panel/management/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  { path: 'login',
  loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule)
  },
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
