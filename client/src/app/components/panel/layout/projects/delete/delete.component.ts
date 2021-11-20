import { ProjectService } from './../../../../../services/projects/project.service';
import { UserService } from 'src/app/services/users/user.service';
import { Router } from '@angular/router';
import { Project } from './../../../../../models/projects/project';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'upso-delete-project',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() project: Project;
  @Output() updateTable: EventEmitter<Project> = new EventEmitter();

  constructor(
    protected _router: Router,
    private _user: UserService,
    private _project: ProjectService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  confirmar($e): void {
    this.setLoading();
    const token = this._user.getToken();
    this._project.delete(this.project.id, token).subscribe(
      (response) => {
        this.setSuccess();
        this.closebutton.nativeElement.click();
        this.updateTable.emit(this.project);
      },
      (error) => this.processError(error)
    );
  }
}
