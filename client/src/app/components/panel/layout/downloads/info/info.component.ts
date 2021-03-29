import { PaperDownload } from './../../../../../models/papers/paper-download';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-paper-download',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() download: PaperDownload;

  constructor() { }

  ngOnInit(): void {
  }

}
