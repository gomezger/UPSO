import { News } from './../../models/news/news';
import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private _api: ApiService
  ) { }

  all = (): Observable<Array<News>> => {
    return this._api.get('news').pipe();
  }

  find = (id: number): Observable<News> => {
    return this._api.get('news/' + id);
  }

  insert = (newsItem: News, token: string): Observable<News> => {
    return this._api.post('news', newsItem, token);
  }

  update = (newsItem: News, token: string): Observable<News> => {
    return this._api.put('news', newsItem, token);
  }

  delete = (id: number, token: string): Observable<News> => {
    return this._api.del('news/' + id, token);
  }

  dummy = (): News => {
    return new News(0, '', '', '', '', null, null);
  }

}
