import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceRoutingModule } from './device-routing.module';
import { DeviceComponent } from './device/device.component';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { DeviceService } from './device.service';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';


@NgModule({
  declarations: [
    DeviceComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    AngularMaterialModule,
    DatatableModule
  ],
  providers:[DeviceService]
})
export class DeviceModule { }
