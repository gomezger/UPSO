import { Investigator } from './../../../../models/investigator';
import { InvestigatorService } from './../../../../services/investigators/investigator.service';
import { Paper } from './../../../../models/papers/paper';
import { PaperService } from './../../../../services/papers/paper.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../../extends/status/status.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'upso-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent extends StatusComponent implements OnInit {
  public papers: Array<Paper>;
  public investigators: Array<Investigator>;

  constructor(
    protected _router: Router,
    protected _paper: PaperService,
    protected _investigator: InvestigatorService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.setLoading();
    this.getPapers();
  }

  getPapers(): void {
    this._paper.all().subscribe(
      (response) => {
        this.setSuccess();
        this.papers = response;
      },
      (error) => this.processError(error)
    );
  }

}
