import { Component, OnInit } from '@angular/core';
import { StatusComponent } from '../../../extends/status/status.component';
import { User } from 'src/app/models/users/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'upso-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends StatusComponent implements OnInit {
  public usuario: User;
  public identity: User;
  public token: string;

  constructor(
    protected _router: Router,
    protected _activatedRouter: ActivatedRoute,
    protected _usuario: UserService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  /**
   * Inicia sesion con los datos cargados.
   * Utiliza los datos que se guardaron el la variable usuario.
   * Si es exitoso, guarda en el local storage el objeto usuario y el token.
   */
  handleSubmit(e): void {
    // evito que recargue pantalla el submit
    e.preventDefault();
    this.setLoading();

    // le paso el usuario que solo tiene la contraseña y el usuario
    this._usuario.login(e.target.email.value, e.target.password.value).subscribe(
      (response) => {
        this._usuario.setLoginData(response);
        this._router.navigate(['/panel']);
      },
      (error) => this.processError(error)
    );

  }

}
