import { User } from './../../../../models/users/user';
import { UserService } from './../../../../services/users/user.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-users',
  templateUrl: './users.component.html',
  styleUrls: [
    './users.component.scss',
    '../../panel.component.scss'
  ]
})
export class UsersComponent extends StatusComponent implements OnInit {
  public users: Array<User>

  constructor(
    protected _router: Router,
    protected _user: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.setLoading();

    this._user.all(this._user.getToken()).subscribe(
      (response) =>  {
        if( this.validate(response))
          this.users = response.users
      },
      (error) => this.validate(error)
    );
  }

}
