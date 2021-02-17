import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsComponent } from './../panel/layout/news/news.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { fromEventPattern } from 'rxjs';
import { WebComponent } from './web.component';
import { InvestigatorsComponent } from './investigators/investigators.component'

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      {
        path: 'novedades',
        children: [
          { path: 'investigators', component: InvestigatorsComponent },
          { path: '', component: NewsComponent },
          { path: ':id/:titulo_url', component: NewsItemComponent }
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
