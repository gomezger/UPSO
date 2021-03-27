import { PaperDownload } from './../../models/papers/paper-download';
import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(
    private _api: ApiService
  ) { }

  all = (token: string): Observable<any> => {
    return this._api.get('downloads/papers', token);
  }

  insert = (paperDownload: PaperDownload): Observable<any> => {
    return this._api.post('downloads/papers/', paperDownload);
  }

  update = (paperDownload: PaperDownload, token: string): Observable<any> => {
    return this._api.put('downloads/papers/', paperDownload, token);
  }

  delete = (id: number, token: string): Observable<any> => {
    return this._api.del('downloads/papers/' + id, token);
  }


  public dummy(): PaperDownload {
    return new PaperDownload(0, '', '', null, '', 0, null, null, null);
  }

}
