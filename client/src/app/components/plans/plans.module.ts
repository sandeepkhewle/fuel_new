import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PlansComponent } from './plans/plans.component';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { PlansService } from './plans.service';
import { AuthService } from 'src/app/shared-modules/services/auth.service';


@NgModule({
  declarations: [
    PlansComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule,
    AngularMaterialModule
  ],
  providers:[PlansService,
    AuthService]
})
export class PlansModule { }
