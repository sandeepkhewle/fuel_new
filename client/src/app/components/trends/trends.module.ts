import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrendsRoutingModule } from './trends-routing.module';
import { TrendsComponent } from './trends/trends.component';
import { AddTrendsComponent } from './add-trends/add-trends.component';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { TrendsService } from './trends.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { UpdateTrendsComponent } from './update-trends/update-trends.component';


@NgModule({
  declarations: [
    TrendsComponent,
    AddTrendsComponent,
    UpdateTrendsComponent
  ],
  imports: [
    CommonModule,
    TrendsRoutingModule,
    AngularMaterialModule,
    DatatableModule
  ],
  exports:[AddTrendsComponent],
  providers:[TrendsService,
  AuthService]
})
export class TrendsModule { }
