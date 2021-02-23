import { StatusComponent } from './../../../../../extends/status/status.component';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { InvestigatorService } from './../../../../../services/investigators/investigator.service';
import { Investigator } from './../../../../../models/investigator';
import { Component, ElementRef, Input, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upso-delete-investigator',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() investigator: Investigator;
  @Output() updateTable: EventEmitter<Investigator> = new EventEmitter();


  constructor(
    protected _router: Router,
    private _user: UserService,
    private _investigator: InvestigatorService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  confirmar($e): void {
    this.setLoading();
    const token = this._user.getToken();
    this._investigator.delete(this.investigator.id, token).subscribe(
      (response) => {
        this.setSuccess();
        this.closebutton.nativeElement.click();
        this.updateTable.emit(this.investigator);
      },
      (error) => this.processError(error)
    );
  }


}
