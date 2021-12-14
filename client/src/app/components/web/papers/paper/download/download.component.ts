import { PaperDownload } from './../../../../../models/papers/paper-download';
import { Router } from '@angular/router';
import { DownloadService } from './../../../../../services/papers/download.service';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Paper } from './../../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent extends StatusComponent implements OnInit {
  @Input() paper: Paper;
  public paperDownload: PaperDownload;

  constructor(
    private _download: DownloadService,
    protected _router: Router
  ) { super(_router); }


  ngOnInit(): void {
    this.dummy();
  }

  confirmar(): void{
    this.setLoading();
    this._download.insert(this.paperDownload).subscribe({
      next: paperDownload => {
        this.paperDownload = paperDownload
        window.open(this.paper.pdf, '_blank');
      },
      error: error => this.processError(error),
      complete: () => this.setSuccess()
    });
  }

  dummy(): void {
    this.paperDownload = this._download.dummy();
    this.paperDownload.paper_id = this.paper.id;
    this.paperDownload.paper = this.paper;
  }
}
