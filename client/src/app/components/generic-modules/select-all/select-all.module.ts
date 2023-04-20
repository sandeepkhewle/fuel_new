import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// internal components & services
import { SelectAllComponent } from './select-all.component';
import { AngularMaterialModule } from '../../../shared-modules/angular.material.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularMaterialModule],

  declarations: [SelectAllComponent],
  exports: [SelectAllComponent],
  providers: [CurrencyPipe]
})
export class SelectAllModule { }