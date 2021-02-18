import { GLOBAL } from './../../../../../services/config/global';
import { News } from './../../../../../models/news/news';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-news',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() newsItem: News;
  public urlStorage: string;

  constructor() { }

  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
  }

}
