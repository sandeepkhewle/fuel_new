import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { AuthGuard } from './shared-modules/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule)
  },
  {
    path: "trends",
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'members',
        loadChildren: () => import('./components/members/members.module').then((m) => m.MembersModule)
      }, {
        path: 'subscription',
        loadChildren: () => import('./components/subscriptions/subscriptions.module').then((m) => m.SubscriptionsModule)
      },
      {
        path: 'upload',
        loadChildren: () => import('./components/upload/upload.module').then((m) => m.UploadModule)
      },
      {
        path: 'trends',
        loadChildren: () => import('./components/trends/trends.module').then((m) => m.TrendsModule)
      },
      {
        path: 'payments',
        loadChildren: () => import('./components/payments/payments.module').then((m) => m.PaymentsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./components/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'app-data',
        loadChildren: () => import('./components/app-data/app-data.module').then((m) => m.AppDataModule)
      },
      {
        path: 'plans',
        loadChildren: () => import('./components/plans/plans.module').then((m) => m.PlansModule)
      },
      {
        path: 'device',
        loadChildren: () => import('./components/device/device.module').then((m) => m.DeviceModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./components/chat/chat.module').then((m) => m.ChatModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./components/reports/reports.module').then((m) => m.ReportsModule)
      },
    ]
  },
  // default and error routes
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
