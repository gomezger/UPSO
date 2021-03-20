import { PaperService } from './../../../services/papers/paper.service';
import { UserService } from './../../../services/users/user.service';
import { Router } from '@angular/router';
import { StatusComponent } from './../../../extends/status/status.component';
import { Paper } from './../../../models/papers/paper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'upso-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})
export class PapersComponent extends StatusComponent implements OnInit {
  public papers: Array<Paper>;
  public itemsPerPage: number;
  public currentPage: number;

  constructor(
    protected _router: Router,
    private _paper: PaperService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.getPapers();
    this.currentPage = 1;
    this.itemsPerPage = 5;
  }

  private getPapers(): void {
    this.setLoading();
    this._paper.all().subscribe({
      next: papers => this.papers = papers,
      error: error => this.processError(error),
      complete: () => this.setSuccess()
    });
  }
}
