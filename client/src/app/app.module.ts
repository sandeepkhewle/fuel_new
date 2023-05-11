import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './shared-modules/angular.material.module';
import { GlobalApiService } from './shared-modules/global-api.service';
import { PWAService } from './shared-modules/services/pwa-updates.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DefaultSettingsComponent } from './components/sidenav/default-settings/default-settings.component';
import { AuthGuard } from './shared-modules/guards/auth.guard';
import { NotAuthGuard } from './shared-modules/guards/notAuth.guard';
import { SidenavService } from './components/sidenav/sidenav.service';
import { AuthService } from './shared-modules/services/auth.service';
import { ReportsComponent } from './components/reports/reports/reports.component';
// import { SubscriptionsComponent } from './components/subscriptions/subscriptions/subscriptions.component';
// import { RestrictionPopupComponent } from './components/restriction-popup/restriction-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DefaultSettingsComponent,
    ReportsComponent,
    // SubscriptionsComponent,
    // RestrictionPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
  ],
  providers: [
    GlobalApiService,
    PWAService,
    AuthGuard,
    NotAuthGuard,
    SidenavService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
