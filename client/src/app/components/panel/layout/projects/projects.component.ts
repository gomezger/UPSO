import { ProjectService } from './../../../../services/projects/project.service';
import { StatusComponent } from './../../../../extends/status/status.component';
import { InvestigatorService } from './../../../../services/investigators/investigator.service';
import { Router } from '@angular/router';
import { Investigator } from './../../../../models/investigator';
import { Project } from './../../../../models/projects/project';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent extends StatusComponent implements OnInit {
  public projects: Array<Project>;
  public investigators: Array<Investigator>;


  constructor(
    protected _router: Router,
    protected _project: ProjectService,
    protected _investigator: InvestigatorService
  ) {
    super(_router); }

  ngOnInit(): void {
    this.setLoading();
    this.getProjects();
  }

  getProjects(): void {
    this._project.all().subscribe(
      (response) => {
        this.setSuccess();
        this.projects = response;
      },
      (error) => this.processError(error)
    );
  }
}
