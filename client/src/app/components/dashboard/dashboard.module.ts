import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { DashboardService } from './dashboard.service';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DatatableModule,
    AngularMaterialModule
  ],
  providers: [
    AuthService,
    DashboardService
]
})
export class DashboardModule { }
