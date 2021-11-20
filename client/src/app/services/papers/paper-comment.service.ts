import { Observable } from 'rxjs';
import { PaperComment } from './../../models/papers/paper-comment';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaperCommentService {

  constructor(
    private _api: ApiService
  ) { }

  all = (token: string): Observable<any> => {
    return this._api.get('comments/papers', token);
  }

  insert = (paperComment: PaperComment): Observable<any> => {
    return this._api.post('comments/papers/', paperComment);
  }

  update = (paperComment: PaperComment, token: string): Observable<any> => {
    return this._api.put('comments/papers/', paperComment, token);
  }

  delete = (id: number, token: string): Observable<any> => {
    return this._api.del('comments/papers/' + id, token);
  }

  dummy = (): PaperComment => {
    return new PaperComment(0, 0, '', '', '', '', null, false, null, null);
  }
}
