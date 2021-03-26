import { PaperComment } from './../../../../../models/papers/paper-comment';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-table-papers-comments',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() comments: Array<PaperComment>;
  public commentsFilter: Array<PaperComment>;
  public keys: Array<any>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor() {
    this.keys = ['nombre', 'email', 'paper.titulo'];
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }


  ngOnInit(): void {
    this.resetFilter();
  }

  resetFilter(): void {
    this.commentsFilter = [...this.comments];
  }
  updateElement(comment: PaperComment): void {
    this.comments.splice(this.comments.indexOf(this.comments.find((element) => element.id === comment.id)), 1, comment);
    this.resetFilter();
  }

}
