import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsComponent } from './news/news.component';
import { IndexComponent } from './index/index.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web.component';

const routes: Routes = [
  {
    path: '',
    component: WebComponent,
    children: [
      { path: '', component: IndexComponent },
      {
        path: 'novedades',
        children: [
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
