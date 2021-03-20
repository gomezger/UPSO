import { Router } from '@angular/router';
import { DownloadService } from './../../../../../services/papers/download.service';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { DownloadPaper } from './../../../../../models/papers/download-paper';
import { Paper } from './../../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent extends StatusComponent implements OnInit {
  @Input() paper: Paper;
  public downloadPaper: DownloadPaper;

  constructor(
    private _download: DownloadService,
    protected _router: Router
  ) { super(_router); }


  ngOnInit(): void {
    this.dummy();
  }

  confirmar(): void{
    this.setLoading();
    console.log(this.downloadPaper);
  }

  dummy(): void {
    this.downloadPaper = this._download.dummy();
    this.downloadPaper.paper_id = this.paper.id;
    this.downloadPaper.paper = this.paper;
  }
}
