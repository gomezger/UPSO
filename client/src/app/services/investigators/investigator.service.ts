import { Investigator } from './../../models/investigator';
import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestigatorService {

  constructor(
    private _api: ApiService
  ) { }

  all = (): Observable<any> => {
    return this._api.get('investigators');
  }

  find = (id: number): Observable<any> => {
    return this._api.get('investigators/' + id);
  }

  insert = (investigator: Investigator, token: string): Observable<any> => {
    return this._api.post('investigators/', investigator, token);
  }

  update = (investigator: Investigator, token: string): Observable<any> => {
    return this._api.put('investigators/', investigator, token);
  }

  delete = (id: number, token: string): Observable<any> => {
    return this._api.del('investigators/' + id, token);
  }

  dummy = (): Investigator => {
    return new Investigator(0, '', '', '', '', '', '','', null, null);
  }
}
