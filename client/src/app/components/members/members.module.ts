import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersComponent } from './members/members.component';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';
import { MembersService } from './members.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';
import { AssignPlansComponent } from './assign-plans/assign-plans.component';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';


@NgModule({
  declarations: [
    MembersComponent,
    AssignPlansComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    DatatableModule,
    AngularMaterialModule
  ],
  exports:[ AssignPlansComponent],
  providers:[MembersService,
  AuthService]
})
export class MembersModule { }
