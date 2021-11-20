import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../services/projects/project.service';
import {StatusComponent} from './../../../../extends/status/status.component';
import { Router, ActivatedRoute } from '@angular/router';
import {Project} from '../../../../models/projects/project';
import { SessionService } from './../../../../services/storage/session.service';

@Component({
  selector: 'upso-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.scss']
})
export class ProyectComponent extends StatusComponent implements OnInit {
  public project: Project;
  public projects: Array<Project>;

  constructor(
    protected _router: Router,
    protected _sesion: SessionService,
    protected _activatedRoute: ActivatedRoute,
    protected _project: ProjectService
  ) { 
    super(_router);
  }

  ngOnInit(): void {
    if (this.project === undefined) {
      this.getProject();
    }
  }

  getProject(){
    this.setLoading();
    this.projects = this._sesion.getItem('projects'); // busco las noticias en el sesion storage

    // obtengo los parametros de la url
    this._activatedRoute.params.subscribe({
      next: ({ id, titulo_url }) => {
        this.project = this.projects?.find((element) => element.id === id); // busco si esta en las publi guardadas
        this.getProjectAux(id, titulo_url, this.projects); // la busco en el backend
        this.getProjects();
      }
    });
  }

  protected getProjectAux(id: number, tituloUrl: string, projects: Array<Project>): void {
    this._project.find(id).subscribe({
      next: (response) => {
        this.setSuccess();
        this.project = response;
        this._sesion.setItem('projects', [response, ...projects]);

        if (tituloUrl !== this.project.titulo_url) {
          this._router.navigate(['/proyectos/', id, this.project.titulo_url]);
        }
      },
      error: error => this.processError(error)
    });
  }

  protected getProjects(): void {
    this.projects = this._sesion.getItem('projects');

    this._project.all().subscribe({
      next: (response) => {
        this.projects = response;
        this._sesion.setItem('projects', response);
      },
      error: error => this.processError(error)
    });
  }
}
