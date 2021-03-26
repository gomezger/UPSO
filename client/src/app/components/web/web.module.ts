import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './../../pipes/safe-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component';
import { InvestigatorComponent } from './investigators/investigator/investigator.component';
import {SkeletonLoaderModule} from './../../modules/skeleton-loader/skeleton-loader.module'
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
import { InvestigatorSkeletonComponent } from './investigators/investigator-skeleton/investigator-skeleton.component';
import { PapersComponent } from './papers/papers.component';
import { PaperComponent } from './papers/paper/paper.component';
import { PaperCardComponent } from './papers/paper-card/paper-card.component';
import { InvestigatorSmallCardComponent } from './investigators/investigator-small-card/investigator-small-card.component';
import { DownloadComponent as DownloadPaperComponent } from './papers/paper/download/download.component';
import { CommentsComponent as CommentsPaperComponent } from './papers/paper/comments/comments.component';
import { FormComponent as CommentFormComponent } from './papers/paper/comments/form/form.component';
import { CommentComponent } from './papers/paper/comments/comment/comment.component';

@NgModule({
  declarations: [
    WebComponent,
    InvestigatorsComponent,
    InvestigatorComponent,
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
    SafeHtmlPipe,
    InvestigatorSkeletonComponent,
    PapersComponent,
    PaperComponent,
    PaperCardComponent,
    InvestigatorSmallCardComponent,
    DownloadPaperComponent,
    CommentsPaperComponent,
    CommentFormComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    SkeletonLoaderModule,
    NgxPaginationModule,
    ShareButtonsModule,
    ShareIconsModule,
  ]
})
export class WebModule { }
