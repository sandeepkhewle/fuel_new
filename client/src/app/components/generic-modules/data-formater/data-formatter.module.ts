import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataFormatter } from './data-formatter.pipe';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [DataFormatter],
  providers: [],
  exports: [DataFormatter]
})
export class DataFormatterModule {}