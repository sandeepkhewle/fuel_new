import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';


@NgModule({
  declarations: [
    SubscriptionsComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule,
    DatatableModule,
    AngularMaterialModule
  ]
})
export class SubscriptionsModule { }
