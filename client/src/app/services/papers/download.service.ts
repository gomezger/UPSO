import { DownloadPaper } from './../../models/papers/download-paper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor() { }



  public dummy(): DownloadPaper {
    return new DownloadPaper(0, '', '', null, '', 0, null, null, null);
  }

}
