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
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;

  @Input() user: User;
  @Input() users: Array<User>;
  @Input() title: string;
  @Output() updateList: EventEmitter<Array<User>> = new EventEmitter();

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
          this.users = [response.user, ...this.users];
          this.user = this._user.dummyUser();
          this.updateList.emit([...this.users]);
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
          this.updateList.emit([...this.users]);
        }
      },
      (error) => {
        console.log(error);
        this.validate(error);
      }
    );
  }
}
