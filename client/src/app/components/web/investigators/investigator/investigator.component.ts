import { Component, OnInit,Input } from '@angular/core';
import {Investigator} from '../../../../models/investigator';
import {GLOBAL} from '../../../../services/config/global';
@Component({
  selector: 'upso-investigator',
  templateUrl: './investigator.component.html',
  styleUrls: ['./investigator.component.scss']
})

export class InvestigatorComponent implements OnInit {
  @Input() investigator:Investigator;
  public url_storage:String;
  constructor() {
    this.url_storage=GLOBAL.url_storage;
  }

  ngOnInit(): void {
  }

}


