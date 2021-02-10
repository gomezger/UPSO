import { FilterService } from './../../../../../services/filters/filter.service';
import { User } from './../../../../../models/users/user';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-table-users',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent implements OnInit {
  @Input() users: Array<User>;
  public users_filter: Array<User>;
  public itemsPerPage = 10;
  public currentPage = 1;
  public keys: Array<string>;

  constructor() {
    this.keys = ['nombre', 'email'];
   }

  ngOnInit(): void {
    this.users_filter = [...this.users];
  }

  resetFilter() {
    this.users_filter = [...this.users];
  }

  insertElement(user: User): void {
    this.users = [user, ...this.users];
    this.resetFilter();
  }

  deleteElement(user: User): void {
    this.users.splice(this.users.indexOf(user), 1); // eliminar usuario
    if (this.users.length / this.itemsPerPage < this.currentPage) {
      this.currentPage--;
    }
    this.resetFilter();
  }





}
