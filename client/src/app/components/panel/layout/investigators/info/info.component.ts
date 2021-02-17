import { GLOBAL } from './../../../../../services/config/global';
import { Investigator } from './../../../../../models/investigator';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-investigator',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() investigator: Investigator;
  public urlStorage: string;

  constructor() { }

  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
  }

}
