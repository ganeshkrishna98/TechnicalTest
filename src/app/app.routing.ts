import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule, UrlSegment, UrlMatcher } from '@angular/router';

import { CreateDocumentComponent } from './features/create-document/create-document.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./features/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {
    path: 'create-document',
    loadChildren: () => import('./features/create-document/create-document.module').then(m => m.CreateDocumentModule)
  },
  {
    path: 'admin-panel',
    loadChildren: () => import('./features/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'access-logs',
    loadChildren: () => import('./features/admin-panel/management/access-logs/access-logs.module').then(m => m.AccessLogsModule)
  },
  {
    path: 'device-management',
    loadChildren: () => import('./features/admin-panel/management/device-management/device-management.module').then(m => m.DeviceManagementModule)
  },
  {
    path: 'storage-management',
    loadChildren: () => import('./features/admin-panel/management/storage-management/storage-management.module').then(m => m.StorageManagementModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('./features/admin-panel/management/user-management/user-management.module').then(m => m.UserManagementModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
    matcher: (url:UrlSegment[]) => {debugger;
      if (url.length === 1 && (url[0].path == 'login' || url[0].path == 'logout')) {
        return {
          consumed: url,
          posParams: {
            username: new UrlSegment(url[0].path.substr(1), {})
          }
        };
      }

      return null;
    }
  },
  {
    path: 'document-management',
    loadChildren: () => import('./features/document/document.module').then(m => m.DocumentModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule)
  }
];

// export function matcher (url: UrlSegment[]): UrlMatcher {
//   if (url.length > 0 && url[0].path === path) {
//      return { consumed: [url[0]] };
//   }
//   return null;
// }

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
