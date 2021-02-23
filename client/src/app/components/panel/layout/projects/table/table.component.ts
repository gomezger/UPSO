import { Router } from '@angular/router';
import { Investigator } from './../../../../../models/investigator';
import { Project } from './../../../../../models/projects/project';
import { Component, Input, OnInit } from '@angular/core';
import { InvestigatorService } from './../../../../../services/investigators/investigator.service';
import { StatusComponent } from './../../../../../extends/status/status.component';

@Component({
  selector: 'upso-table-projects',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss', '../../../panel.component.scss']
})
export class TableComponent extends StatusComponent implements OnInit {
  @Input() projects: Array<Project>;
  public investigators: Array<Investigator>;
  public projectsFilter: Array<Project>;
  public keys: Array<string>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor(
    protected _router: Router,
    protected _investigator: InvestigatorService
  ) {
    super(_router);
    this.keys = ['titulo', 'subtitulo', 'descripcion'];
    this.itemsPerPage = 10;
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.resetFilter();
    this.getInvestigators();
  }

  resetFilter(): void {
    this.projectsFilter = [...this.projects];
  }

  insertElement(project: Project): void {
    this.projects = [project, ...this.projects];
    this.resetFilter();
  }

  updateElement(project: Project): void {
    this.projects.splice(this.projects.indexOf(this.projects.find((element) => element.id === project.id)), 1, project);
    this.resetFilter();
  }

  deleteElement(project: Project): void {
    this.projects.splice(this.projects.indexOf(project), 1); // eliminar usuario
    if (this.projects.length / this.itemsPerPage < this.currentPage) {
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
