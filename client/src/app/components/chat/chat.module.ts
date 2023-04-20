import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatComponent } from './chat/chat.component';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/shared-modules/angular.material.module';
import { DatatableModule } from '../generic-modules/generic-table/datatable.module';


@NgModule({
  declarations: [
    ChatComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule,
    FormsModule,
    AngularMaterialModule,
    DatatableModule
  ]
})
export class ChatModule { }
