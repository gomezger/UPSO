import { SessionService } from './../../../services/storage/session.service';
import { NewsService } from './../../../services/news/news.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'upso-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends StatusComponent implements OnInit {
  public news: Array<News>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor(
    protected _router: Router,
    protected _news: NewsService,
    protected _sesion: SessionService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.setLoading();
    this.getNews();
    this.currentPage = 1;
    this.itemsPerPage = 12;
  }

  getNews(): void {
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
