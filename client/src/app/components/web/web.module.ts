import { NoSanitizePipe } from './../../pipes/no-sanitize.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
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
import { NewsComponent as NewnessesIndexComponent } from './index/news/news.component';
import { OptionComponent } from './index/options/option/option.component';
import { NewsCardComponent } from './news/news-card/news-card.component';
import { NewsComponent } from './news/news.component';
import { LoadingComponent } from './others/loading/loading/loading.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

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
    NewsCardComponent,
    NewsComponent,
    LoadingComponent,
    NewsItemComponent,
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    NgxPaginationModule,
    ShareButtonsModule,
    ShareIconsModule
  ]
})
export class WebModule { }
