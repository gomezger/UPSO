import { NewsService } from './../../../../../services/news/news.service';
import { UserService } from './../../../../../services/users/user.service';
import { Router } from '@angular/router';
import { News } from './../../../../../models/news/news';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-delete-news',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent extends StatusComponent implements OnInit {
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  @Input() newsItem: News;
  @Output() updateTable: EventEmitter<News> = new EventEmitter();

  constructor(
    protected _router: Router,
    private _user: UserService,
    private _news: NewsService
  ) {
    super(_router);
  }

  ngOnInit(): void {
  }

  confirmar($e): void {
    this.setLoading();
    const token = this._user.getToken();
    this._news.delete(this.newsItem.id, token).subscribe(
      (response) => {
        this.setSuccess();
        this.closebutton.nativeElement.click();
        this.updateTable.emit(this.newsItem);
      },
      (error) => {
        this.processError(error);
      }
    );
  }

}
