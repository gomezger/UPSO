import { PaperComment } from './../../../../../models/papers/paper-comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-info-paper-comment',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() comment: PaperComment;

  constructor() { }

  ngOnInit(): void {
  }

}
