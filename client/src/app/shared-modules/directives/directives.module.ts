import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodoubleclickDirective } from './nodoubleclick/nodoubleclick.directive';

@NgModule({
  declarations: [NodoubleclickDirective],
  imports: [
    CommonModule
  ],
  exports: [NodoubleclickDirective]
})
export class DirectivesModule { }