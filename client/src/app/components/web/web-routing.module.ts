import { Cod404Component } from './errors/cod404/cod404.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PaperComponent } from './papers/paper/paper.component';
import { PapersComponent } from './papers/papers.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component';
import {ProyectsComponent} from './proyects/proyects.component';
import {ProyectComponent} from './proyects/proyect/proyect.component';
import { FileComponent as DownloadPaperFileComponent } from './papers/paper/download/file/file.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'investigadores', component: InvestigatorsComponent },
      { path: 'nosotros', component: AboutUsComponent },
      {
        path: 'novedades',
        children: [
          { path: '', component: NewsComponent },
          { path: ':id/:titulo_url', component: NewsItemComponent }
        ]
      },
      {
        path: 'publicaciones',
        children: [
          { path: '', component: PapersComponent },
          { path: 'download/:download_id', component: DownloadPaperFileComponent },
          { path: ':id/:titulo_url', component: PaperComponent }
        ]
      },
      {
        path:'proyectos',
        children:[
          {path:'',component:ProyectsComponent},
          {path: ':id/:titulo_url', component: ProyectComponent}
        ]
      },
      {path: '**', component: Cod404Component}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
