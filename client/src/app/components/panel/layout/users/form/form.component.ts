import { UserService } from './../../../../../services/users/user.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { User } from './../../../../../models/users/user';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-form-user',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @Input() user: User;
  @Input() title: string;
  @Output() updateTable: EventEmitter<User> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;

  constructor(
    protected _router: Router,
    protected _user: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.user = (this.user === undefined) ? this._user.dummyUser() : this.user;
  }

  confirmar = () => {
    (this.user.id === 0) ? this.insert() : this.update();
  }

  insert() {
    this.setLoading()
    const token = this._user.getToken();
    this._user.insert(this.user, token).subscribe(
      (response) => {
        if (this.validate(response)) {
          this.closebutton.nativeElement.click();
          this.user = this._user.dummyUser();
          this.updateTable.emit(response.user);
        }
      },
      (error) => {
        console.log(error);
        this.validate(error);
      }
    );
  }

  update() {
    this.setLoading()
    const token = this._user.getToken();
    this._user.update(this.user, token).subscribe(
      (response) => {
        if (this.validate(response)) {
          this.closebutton.nativeElement.click();
          this.user = response.user;
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
