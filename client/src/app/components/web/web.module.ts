import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component';
import { InvestigatorComponent } from './investigators/investigator/investigator.component';
import {SkeletonLoaderModule} from './../../modules/skeleton-loader/skeleton-loader.module'

@NgModule({
  declarations: [
    WebComponent,
    InvestigatorsComponent,
    InvestigatorComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    SkeletonLoaderModule
  ]
})
export class WebModule { }
