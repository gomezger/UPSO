import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { WebComponent } from './web.component';
import {InvestigatorsComponent} from './investigators/investigators.component'

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children:[
      {path:'investigators',component:InvestigatorsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
