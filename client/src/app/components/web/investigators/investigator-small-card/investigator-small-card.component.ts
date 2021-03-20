import { GLOBAL } from './../../../../services/config/global';
import { Investigator } from './../../../../models/investigator';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-investigator-small-card',
  templateUrl: './investigator-small-card.component.html',
  styleUrls: ['./investigator-small-card.component.scss']
})
export class InvestigatorSmallCardComponent implements OnInit {
  @Input() investigator: Investigator;
  public url_storage: string;

  constructor() {
    this.url_storage = GLOBAL.url_storage;
  }

  ngOnInit(): void {
  }

}
