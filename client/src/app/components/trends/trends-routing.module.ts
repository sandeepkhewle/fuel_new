import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendsComponent } from './trends/trends.component';

const routes: Routes = [
  {
    path:'', component:TrendsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrendsRoutingModule { }
