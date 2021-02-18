import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private _api: ApiService
  ) { }

  upload = (file: File, disk: string, token: string): Observable<any> => {
    const data = new FormData();
    data.append('file', file);
    data.append('disk', disk);
    return this._api.postFile('storage/image', data, token);
  }

}
