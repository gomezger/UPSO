import { Investigator } from './../../../../../models/investigator';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { InvestigatorService } from './../../../../../services/investigators/investigator.service';
import { Paper } from './../../../../../models/papers/paper';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-table-papers',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent extends StatusComponent implements OnInit {
  @Input() papers: Array<Paper>;
  public investigators: Array<Investigator>;
  public papersFilter: Array<Paper>;
  public keys: Array<string>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor(
    protected _router: Router,
    protected _investigator: InvestigatorService
  ) {
    super(_router);
    this.keys = ['titulo', 'descripcion','hola.chau'];
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }


  ngOnInit(): void {
    this.resetFilter();
    this.getInvestigators();
  }

  resetFilter(): void {
    this.papersFilter = [...this.papers];
  }

  insertElement(paper: Paper): void {
    this.papers = [paper, ...this.papers];
    this.resetFilter();
  }

  updateElement(paper: Paper): void {
    this.papers.splice(this.papers.indexOf(this.papers.find((element) => element.id === paper.id)), 1, paper);
    this.resetFilter();
  }

  deleteElement(paper: Paper): void {
    this.papers.splice(this.papers.indexOf(paper), 1); // eliminar usuario
    if (this.papers.length / this.itemsPerPage < this.currentPage) {
      this.currentPage--;
    }
    this.resetFilter();
  }

  getInvestigators(): void {
    this._investigator.all().subscribe(
      (response) => {
        this.setSuccess();
        this.investigators = response;
      },
      (error) => this.processError(error)
    );
  }

}
