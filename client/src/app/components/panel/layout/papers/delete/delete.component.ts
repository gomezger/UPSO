import { UserService } from './../../../../../services/users/user.service';
import { PaperService } from './../../../../../services/papers/paper.service';
import { Router } from '@angular/router';
import { Paper } from './../../../../../models/papers/paper';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upso-delete-paper',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() paper: Paper;
  @Output() updateTable: EventEmitter<Paper> = new EventEmitter();

  constructor(
    protected _router: Router,
    private _user: UserService,
    private _paper: PaperService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  confirmar($e): void {
    this.setLoading();
    const token = this._user.getToken();
    this._paper.delete(this.paper.id, token).subscribe(
      (response) => {
        this.setSuccess();
        this.closebutton.nativeElement.click();
        this.updateTable.emit(this.paper);
      },
      (error) => this.processError(error)
    );
  }


}
