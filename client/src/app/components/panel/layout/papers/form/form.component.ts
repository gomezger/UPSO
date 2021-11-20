import { Investigator } from './../../../../../models/investigator';
import { PaperService } from './../../../../../services/papers/paper.service';
import { UserService } from './../../../../../services/users/user.service';
import { Router } from '@angular/router';
import { Paper } from './../../../../../models/papers/paper';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-form-paper',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @Input() paper: Paper;
  @Input() title: string;
  @Output() updateTable: EventEmitter<Paper> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myPaper: Paper;
  @Input() investigators: Array<Investigator>;

  constructor(
    protected _router: Router,
    protected _user: UserService,
    protected _paper: PaperService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.myPaper = (this.paper === undefined) ? this._paper.dummy() : { ...this.paper };
  }

  confirmar = (): void => {
    (this.myPaper.id === 0) ? this.insert() : this.update();
  }

  insert(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._paper.insert(this.myPaper, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.paper = this._paper.dummy();
        this.myPaper = this._paper.dummy();
        this.updateTable.emit(response);
      },
      (error) => this.processError(error)
    );
  }

  update(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._paper.update(this.myPaper, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.paper = response;
        this.myPaper = { ...this.paper };
        this.updateTable.emit(this.paper);
      },
      (error) => this.processError(error)
    );
  }
}
