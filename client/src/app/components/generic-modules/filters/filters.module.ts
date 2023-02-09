import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { FiltersService } from './filters.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SelectAllModule } from '../select-all/select-all.module';
import { RestrictionModule } from '../restriction/restriction.module';
import { FiltersComponent } from './filters/filters.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,    
    AngularMaterialModule,
    SelectAllModule, 
    RestrictionModule,
    HttpClientModule
  ],
  exports: [FiltersComponent],
  providers: [
    FiltersService,
    DeviceDetectorService],
})
export class FiltersModule { }
