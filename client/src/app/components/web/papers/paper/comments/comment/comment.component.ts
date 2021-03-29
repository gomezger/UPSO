import { PaperComment } from './../../../../../../models/papers/paper-comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: PaperComment;

  constructor() { }

  ngOnInit(): void {
  }

}
