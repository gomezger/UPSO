import { Investigator } from './../../../../models/investigator';
import { InvestigatorService } from './../../../../services/investigators/investigator.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-investigators',
  templateUrl: './investigators.component.html',
  styleUrls: ['./investigators.component.scss']
})
export class InvestigatorsComponent extends StatusComponent implements OnInit {
  public investigators: Array<Investigator>;

  constructor(
    protected _router: Router,
    protected _investigator: InvestigatorService
  ) {
    super(_router);
   }

  ngOnInit(): void {
    this.setLoading();
    this.getInvestigators();
  }

  getInvestigators(): void {
    this._investigator.all().subscribe(
      (response) => {
        this.setSuccess();
        this.investigators = response;
      },
      (error) => this.processError(error)
    );
  }

}
