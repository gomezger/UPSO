import { NewsService } from './../../../../services/news/news.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'upso-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss', '../../panel.component.scss']
})
export class NewsComponent extends StatusComponent implements OnInit {
  public news: Array<News>;

  constructor(
    protected _router: Router,
    protected _news: NewsService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.setLoading();
    this.getNews();
  }

  getNews(): void {
    this._news.all().subscribe(
      (response) => {
        this.setSuccess();
        this.news = response;
      },
      (error) => {
        this.validate(error);
      }
    );
  }

}
