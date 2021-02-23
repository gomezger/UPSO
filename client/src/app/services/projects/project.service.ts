import { Project } from './../../models/projects/project';
import { Observable } from 'rxjs';
import { ApiService } from './../config/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private _api: ApiService
  ) { }

  all = (): Observable<any> => {
    return this._api.get('projects');
  }

  find = (id: number): Observable<any> => {
    return this._api.get('projects/' + id);
  }

  insert = (project: Project, token: string): Observable<any> => {
    return this._api.post('projects/', project, token);
  }

  update = (project: Project, token: string): Observable<any> => {
    return this._api.put('projects/', project, token);
  }

  delete = (id: number, token: string): Observable<any> => {
    return this._api.del('projects/' + id, token);
  }

  dummy = (): Project => {
    return new Project(0, '', '', '', '', '', '', []);
  }
}
