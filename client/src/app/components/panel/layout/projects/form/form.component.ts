import { ProjectService } from './../../../../../services/projects/project.service';
import { UserService } from 'src/app/services/users/user.service';
import { Router } from '@angular/router';
import { Investigator } from './../../../../../models/investigator';
import { Project } from './../../../../../models/projects/project';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-form-project',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @Input() project: Project;
  @Input() title: string;
  @Output() updateTable: EventEmitter<Project> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myProject: Project;
  @Input() investigators: Array<Investigator>;

  constructor(
    protected _router: Router,
    protected _user: UserService,
    protected _project: ProjectService
  ) {
    super(_router);
  }


  ngOnInit(): void {
    this.myProject = (this.project === undefined) ? this._project.dummy() : { ...this.project };
  }

  confirmar = (): void => {
    (this.myProject.id === 0) ? this.insert() : this.update();
  }

  insert(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._project.insert(this.myProject, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.project = this._project.dummy();
        this.myProject = this._project.dummy();
        this.updateTable.emit(response);
      },
      (error) => this.processError(error)
    );
  }

  update(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._project.update(this.myProject, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.project = response;
        this.myProject = { ...this.project };
        this.updateTable.emit(this.project);
      },
      (error) => this.processError(error)
    );
  }
}
