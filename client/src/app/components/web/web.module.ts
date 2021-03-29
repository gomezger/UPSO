import { FormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './../../pipes/safe-html.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebRoutingModule } from './web-routing.module';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component';
import { InvestigatorComponent } from './investigators/investigator/investigator.component';
import { SkeletonLoaderModule } from './../../modules/skeleton-loader/skeleton-loader.module'
import { IndexComponent } from './index/index.component';
import { HeaderComponent } from './others/header/header.component';
import { FooterComponent } from './others/footer/footer.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { AboutUsComponent as IndexAboutUsComponent } from './index/about-us/about-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
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
import { ProyectsComponent } from './proyects/proyects.component';
import { ProyectSkeletonComponent } from './proyects/proyect-skeleton/proyect-skeleton.component';
import { ProyectCardComponent } from './proyects/proyect-card/proyect-card.component';
import { ProyectComponent } from './proyects/proyect/proyect.component';
import { CommentComponent } from './papers/paper/comments/comment/comment.component';
import { FileComponent as DownloadPaperFileComponent } from './papers/paper/download/file/file.component';
import { Cod404Component } from './errors/cod404/cod404.component';
import { ContactComponent } from './contact/contact.component';

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
    ProyectsComponent,
    ProyectSkeletonComponent,
    ProyectCardComponent,
    ProyectComponent,
    CommentComponent,
    DownloadPaperFileComponent,
    IndexAboutUsComponent,
    Cod404Component,
    ContactComponent
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
