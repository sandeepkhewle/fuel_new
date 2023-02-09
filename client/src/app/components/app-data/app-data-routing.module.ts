import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDataComponent } from './app-data/app-data.component'

const routes: Routes = [
  {path:'', component:AppDataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppDataRoutingModule { }
