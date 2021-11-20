import { GLOBAL } from './../../../../../services/config/global';
import { Project } from './../../../../../models/projects/project';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-project',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() project: Project;
  public urlStorage: string;

  constructor() { }


  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
  }
}
