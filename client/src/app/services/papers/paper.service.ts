import { Paper } from './../../models/papers/paper';
import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperService {

  constructor(
    private _api: ApiService
  ) { }

  all = (): Observable<any> => {
    return this._api.get('papers');
  }

  find = (id: number): Observable<any> => {
    return this._api.get('papers/' + id);
  }

  insert = (paper: Paper, token: string): Observable<any> => {
    return this._api.post('papers', paper, token);
  }

  update = (paper: Paper, token: string): Observable<any> => {
    return this._api.put('papers', paper, token);
  }

  delete = (id: number, token: string): Observable<any> => {
    return this._api.del('papers/' + id, token);
  }

  dummy = (): Paper => {
    return new Paper(0, '', '', '', '', '', '', [], []);
  }
}
