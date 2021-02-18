import { FilterService } from './../../../../../services/filters/filter.service';
import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'upso-table-news',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() news: Array<News>;
  public newsFilter: Array<News>;
  public keys: Array<string>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor() {
    this.keys = ['titulo', 'descripcion'];
    this.itemsPerPage = 10;
    this.currentPage = 1;

  }

  ngOnInit(): void {
    this.resetFilter();
  }

  resetFilter() {
    this.newsFilter = [...this.news];
  }

  insertElement(newsItem: News): void {
    this.news = [newsItem, ...this.news];
    this.resetFilter();
  }

  updateElement(newsItem: News): void {
    this.news.splice(this.news.indexOf(this.news.find((element) => element.id === newsItem.id)), 1, newsItem);
    this.resetFilter();
  }

  deleteElement(newsItem: News): void {
    this.news.splice(this.news.indexOf(newsItem), 1); // eliminar usuario
    if (this.news.length / this.itemsPerPage < this.currentPage) {
      this.currentPage--;
    }
    this.resetFilter();
  }


}
