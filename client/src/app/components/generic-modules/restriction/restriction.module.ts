import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestrictionPopupComponent } from './restriction-popup/restriction-popup.component';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';

@NgModule({
  declarations: [RestrictionPopupComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [],
  exports:[RestrictionPopupComponent]
})
export class RestrictionModule { }
