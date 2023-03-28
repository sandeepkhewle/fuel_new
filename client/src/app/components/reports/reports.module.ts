import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReportsService } from './reports.service';
import { FormatterModule } from 'src/app/shared-modules/format-module/formatter.module';
import { SelectAllModule } from '../generic-modules/select-all/select-all.module';
import { RestrictionModule } from '../generic-modules/restriction/restriction.module';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule } from '@angular/material/core';
// import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReportsRoutingModule,
    AngularMaterialModule,
    FormatterModule,
    SelectAllModule,
    RestrictionModule,
    MatMomentDateModule,
    MatNativeDateModule,
  ]
})
export class ReportsModule { }
