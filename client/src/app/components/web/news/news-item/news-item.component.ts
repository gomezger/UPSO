import { GLOBAL } from './../../../../services/config/global';
import { NewsService } from './../../../../services/news/news.service';
import { SessionService } from './../../../../services/storage/session.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { News } from './../../../../models/news/news';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'upso-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent extends StatusComponent implements OnInit {
  @Input() newsItem: News;
  public news: Array<News>;
  public urlStorage: string;

  constructor(
    protected _router: Router,
    protected _sesion: SessionService,
    private _activatedRoute: ActivatedRoute,
    protected _news: NewsService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
    if (this.newsItem === undefined) {
      this.getNewsItem();
    }
  }

  getNewsItem(): void {
    this.setLoading();
    this.news = this._sesion.getItem('news'); // busco las noticias en el sesion storage

    // obtengo los parametros de la url
    this._activatedRoute.params.subscribe(
      ({ id, titulo_url }) => {
        this.newsItem = this.news?.find((element) => element.id === id); // busco si esta en las noticias guardadas
        this.getNewsItemAux(id, titulo_url, this.news); // la bsuco en el backend
        this.getNews();
      }
    );
  }

  protected getNewsItemAux(id: number, tituloUrl: string, news: Array<News>): void {
    this._news.find(id).subscribe(
      (response) => {
        this.setSuccess();
        this.newsItem = response;
        this._sesion.setItem('news', [response, ...(news && news.length) ? news : []]);

        if (tituloUrl !== this.newsItem.titulo_url) {
          this._router.navigate(['/novedades/', id, this.newsItem.titulo_url]);
        }
      },
      (error) => this.processError(error)
    );
  }

  protected getNews(): void {
    this.news = this._sesion.getItem('news');

    this._news.all().subscribe(
      (response) => {
        this.news = response;
        this._sesion.setItem('news', response);
      },
      (error) => this.processError(error)
    );
  }


}
