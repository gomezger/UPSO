import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './others/header/header.component';
import { FooterComponent } from './others/footer/footer.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { AboutUsComponent } from './index/about-us/about-us.component';
import { OptionsComponent } from './index/options/options.component';
import { NewnessesComponent as NewnessesIndexComponent } from './index/newnesses/newnesses.component';
import { OptionComponent } from './index/options/option/option.component';


@NgModule({
  declarations: [
    WebComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    AboutUsComponent,
    OptionsComponent,
    NewnessesIndexComponent,
    OptionComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule
  ]
})
export class WebModule { }
