import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-paper-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public itemsPerPage: number;
  public currentPage: number;

  constructor() { }

  ngOnInit(): void {
    this.currentPage = 1;
    this.itemsPerPage = 3;
  }

}
