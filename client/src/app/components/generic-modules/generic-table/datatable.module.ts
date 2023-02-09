import { NgModule } from '@angular/core';
import { DataTableComponent } from './datatable/datatable.component';

// gloabal angular mterial module
import { AngularMaterialModule } from '../../../shared-modules/angular.material.module';
// Member Service
import { DataTableService } from './datatable.service';
// formatter module
import { FormatterModule } from '../../../shared-modules/format-module/formatter.module';
import { DataFormatterModule } from '../data-formater/data-formatter.module';
import { FiltersModule } from '../filters/filters.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    DataTableComponent
  ],
  imports: [
    AngularMaterialModule,
    FormatterModule,
    DataFormatterModule,
    FiltersModule,
    HttpClientModule,
    NgxDatatableModule
  ],
  exports: [DataTableComponent],
  providers: [DataTableService]
})
export class DatatableModule { }
