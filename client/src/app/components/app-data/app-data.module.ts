import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDataRoutingModule } from './app-data-routing.module';
import { AppDataComponent } from './app-data/app-data.component';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { AppDataService } from './app-data.service';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { UpdateAppDataComponent } from './update-app-data/update-app-data.component';


@NgModule({
  declarations: [
    AppDataComponent,
    UpdateAppDataComponent
  ],
  imports: [
    CommonModule,
    AppDataRoutingModule,    
    AngularMaterialModule,
    DatatableModule
  ],
  providers:[
    AuthService,
    AppDataService
  ],
  exports:[UpdateAppDataComponent]
})
export class AppDataModule { }
