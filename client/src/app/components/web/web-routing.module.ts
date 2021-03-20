import { PaperComponent } from './papers/paper/paper.component';
import { PapersComponent } from './papers/papers.component';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component'

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      { path: 'investigators', component: InvestigatorsComponent },
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
          { path: ':id/:titulo_url', component: PaperComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebRoutingModule { }
