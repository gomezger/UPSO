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
  public myUser: User;

  constructor(
    protected _router: Router,
    protected _user: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.myUser = (this.user === undefined) ? this._user.dummy() : { ...this.user };
  }

  confirmar = () => {
    (this.myUser.id === 0) ? this.insert() : this.update();
  }

  insert() {
    this.setLoading()
    const token = this._user.getToken();
    this._user.insert(this.myUser, token).subscribe(
      (response) => {
        if (this.validate(response)) {
          this.closebutton.nativeElement.click();
          this.user = this._user.dummy();
          this.myUser = this._user.dummy();
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
    this._user.update(this.myUser, token).subscribe(
      (response) => {
        if (this.validate(response)) {
          this.closebutton.nativeElement.click();
          this.user = response.user;
          this.myUser = { ...this.user };
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
