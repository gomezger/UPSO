import { GLOBAL } from './../../../../../../services/config/global';
import { PaperDownload } from './../../../../../../models/papers/paper-download';
import { DownloadService } from './../../../../../../services/papers/download.service';
import { Router, ActivatedRoute } from '@angular/router';
import { StatusComponent } from './../../../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent extends StatusComponent implements OnInit {
  public paperDownload: PaperDownload;
  public url: string;

  constructor(
    protected _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _download: DownloadService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.getDownloadId();
  }

  private getDownloadId(): void {
    this.setLoading();

    // obtengo los parametros de la url
    this._activatedRoute.params.subscribe({
      next: ({ download_id }) => this.getDownloadInfo(download_id)
    });
  }

  private getDownloadInfo(id: string): void {
    this._download.find(id).subscribe({
      next: download => {
        this.paperDownload = download;
        this.url = GLOBAL.url_storage + 'papers/' + this.paperDownload.paper.pdf;
      },
      complete: () => {
        this.setSuccess();
        this.setDownloaded();
      }
    });
  }

  setDownloaded(): void {
    const paperDownload = { ...this.paperDownload };
    paperDownload.download = true;
    this._download.update(paperDownload).subscribe({
      complete: () => { }
    });
  }

}
