import { PaperComment } from './../../../../../models/papers/paper-comment';
import { Paper } from './../../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() paper: Paper;
  public itemsPerPage: number;
  public currentPage: number;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.itemsPerPage = 3;
  }

  update(comment: PaperComment): void {
    this.paper.comments = [comment, ...this.paper.comments];
    this.currentPage = 0;
  }

}
