import { Investigator } from './../../../../../models/investigator';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-table-investigators',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() investigators: Array<Investigator>;
  public investigatorsFilter: Array<Investigator>;
  public keys: Array<string>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor() { }

  ngOnInit(): void {
    this.keys = ['nombre', 'titulo', 'email'];
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.resetFilter();
  }

  resetFilter(): void {
    this.investigatorsFilter = [...this.investigators];
  }

  insertElement(investigator: Investigator): void {
    this.investigators = [investigator, ...this.investigators];
    this.resetFilter();
  }

  updateElement(investigator: Investigator): void {
    this.investigators.splice(
      this.investigators.indexOf(this.investigators.find((element) => element.id === investigator.id)),
      1,
      investigator
    );
    this.resetFilter();
  }

  deleteElement(investigator: Investigator): void {
    this.investigators.splice(this.investigators.indexOf(investigator), 1); // eliminar usuario
    if (this.investigators.length / this.itemsPerPage < this.currentPage) {
      this.currentPage--;
    }
    this.resetFilter();
  }


}
