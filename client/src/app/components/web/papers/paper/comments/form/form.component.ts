import { Router } from '@angular/router';
import { StatusComponent } from './../../../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-comment-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent  implements OnInit {

  constructor(
    protected _router: Router
    ) { super(_router); }

  ngOnInit(): void {
  }

  confirmar(): void{
    this.setLoading();
  }

  dummy(): void {
  }

}
