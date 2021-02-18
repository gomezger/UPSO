import { NewsService } from './../../../../services/news/news.service';
import { SessionService } from './../../../../services/storage/session.service';
import { News } from './../../../../models/news/news';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-news-index',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends StatusComponent implements OnInit {
  public news: Array<News>;

  constructor(
    protected _router: Router,
    protected _sesion: SessionService,
    protected _news: NewsService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.getNews();
  }

  getNews(): void {
    this.setLoading();
    this.news = this._sesion.getItem('news');

    this._news.all().subscribe(
      (response) => {
        this.setSuccess();
        this.news = response;
        this._sesion.setItem('news', response);
      },
      (error) => this.processError(error)
    );
  }


}
