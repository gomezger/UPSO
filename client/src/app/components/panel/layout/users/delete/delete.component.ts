import { UserService } from './../../../../../services/users/user.service';
import { Router } from '@angular/router';
import { User } from './../../../../../models/users/user';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-delete-user',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() user: User;
  @Output() updateTable: EventEmitter<User> = new EventEmitter();

  constructor(
    protected _router: Router,
    private _user: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }


  confirmar($e) {
    this.setLoading()
    const token = this._user.getToken();
    this._user.delete(this.user.email, token).subscribe(
      (response) => {
        if (this.validate(response)) {
          this.closebutton.nativeElement.click();
          this.updateTable.emit(this.user);
        }
      },
      (error) => {
        console.log(error);
        this.validate(error);
      }
    );
  }

}
