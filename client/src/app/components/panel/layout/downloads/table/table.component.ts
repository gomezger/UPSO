import { PaperDownload } from './../../../../../models/papers/paper-download';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-table-paper-downloads',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() downloads: Array<PaperDownload>;
  public downloadsFilter: Array<PaperDownload>;
  public keys: Array<string>;
  public itemsPerPage: number;
  public currentPage: number;


  constructor() {
    this.keys = ['nombre', 'email', 'paper.titulo'];
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.resetFilter();
  }

  resetFilter(): void {
    this.downloadsFilter = [...this.downloads];
  }
  updateElement(download: PaperDownload): void {
    this.downloads.splice(this.downloads.indexOf(this.downloads.find((element) => element.id === download.id)), 1, download);
    this.resetFilter();
  }
}
