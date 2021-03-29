import { UserService } from './../../../../services/users/user.service';
import { DownloadService } from './../../../../services/papers/download.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { PaperDownload } from './../../../../models/papers/paper-download';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent extends StatusComponent implements OnInit {
  public downloads: Array<PaperDownload>;

  constructor(
    protected _router: Router,
    private _download: DownloadService,
    private _user: UserService
  ) {
    super(_router);
   }

   ngOnInit(): void {
    this.getDownloads();
  }

  getDownloads(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._download.all(token).subscribe({
      next: downloads => this.downloads = downloads,
      complete: () => this.setSuccess(),
      error: error => this.processError(error)
    });
  }


}
