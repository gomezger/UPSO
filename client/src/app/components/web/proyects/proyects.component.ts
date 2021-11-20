import { Component, OnInit } from '@angular/core';
import { StatusComponent } from './../../../extends/status/status.component';
import { Router } from '@angular/router';
import {ProjectService} from '../../../services/projects/project.service';
import {Project} from '../../../models/projects/project';

@Component({
  selector: 'upso-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent extends StatusComponent implements OnInit {
  public projects: Array<Project>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor(
    protected _router: Router,
    private _project: ProjectService
  ) { 
    super(_router);
  }

  ngOnInit(): void {
    this.getProjects();
    this.currentPage = 1;
    this.itemsPerPage = 5;
  }

  private getProjects(): void {
    this.setLoading();
    this._project.all().subscribe({
      next: projects => this.projects = projects,
      error: error => this.processError(error),
      complete: () => this.setSuccess()
    });
  }
}
