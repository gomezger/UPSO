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
  public itemsPerPage = 10;
  public currentPage = 1;

  constructor(
    protected _filter: FilterService
  ) { }

  ngOnInit(): void {
  }

  filtrar({ target: { value } }): void {
    this.newsFilter = this._filter.filtrar(value, this.news, ['titulo', 'descripcion']);
  }

  resetFilter() {
    this.newsFilter = [...this.news];
  }

  insertElement(newsItem: News): void {
    this.news = [newsItem, ...this.news];
    this.resetFilter();
  }

  updateElement(newsItem: News): void {
    this.news.splice(this.news.indexOf(this.news.find((element)=> element.id === newsItem.id)), 1, newsItem);
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
