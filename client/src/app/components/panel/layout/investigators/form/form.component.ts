import { InvestigatorService } from './../../../../../services/investigators/investigator.service';
import { UserService } from 'src/app/services/users/user.service';
import { Router } from '@angular/router';
import { Investigator } from './../../../../../models/investigator';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-form-investigator',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @Input() investigator: Investigator;
  @Input() title: string;
  @Output() updateTable: EventEmitter<Investigator> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myInvestigator: Investigator;

  constructor(
    protected _router: Router,
    protected _user: UserService,
    protected _investigator: InvestigatorService) {
    super(_router);
  }

  ngOnInit(): void {
    this.myInvestigator = (this.investigator === undefined) ? this._investigator.dummy() : { ...this.investigator };
  }

  confirmar = (): void  => {
    (this.myInvestigator.id === 0) ? this.insert() : this.update();
  }

  private insert(): void {
    this.setLoading();
    console.log(this.myInvestigator);
    const token = this._user.getToken();
    this._investigator.insert(this.myInvestigator, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.investigator = this._investigator.dummy();
        this.myInvestigator = this._investigator.dummy();
        this.updateTable.emit(response);
      },
      (error) => this.processError(error)
    );
  }

  private update(): void {
    this.setLoading();
    const token = this._user.getToken();
    this._investigator.update(this.myInvestigator, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.investigator = response;
        this.myInvestigator = { ...this.investigator };
        this.updateTable.emit(this.investigator);
      },
      (error) => this.processError(error)
    );
  }
}
