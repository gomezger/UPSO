import { GLOBAL } from './../../../../../services/config/global';
import { Paper } from './../../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-paper',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() paper: Paper;
  public urlStorage: string;


  constructor() { }


  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
  }
}
