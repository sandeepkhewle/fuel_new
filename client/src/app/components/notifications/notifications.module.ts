import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { NotificationsService } from './notifications.service';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { SendNotificationsComponent } from './send-notifications/send-notifications.component';


@NgModule({
  declarations: [
    NotificationsComponent,
    SendNotificationsComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    AngularMaterialModule,
    DatatableModule
  ],
  providers:[
    AuthService,
    NotificationsService
  ],
  exports:[SendNotificationsComponent]
})
export class NotificationsModule { }
