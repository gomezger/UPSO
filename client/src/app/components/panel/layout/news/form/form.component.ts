import { NewsService } from './../../../../../services/news/news.service';
import { StatusComponent } from './../../../../../extends/status/status.component';
import { UserService } from './../../../../../services/users/user.service';
import { Router } from '@angular/router';
import { News } from './../../../../../models/news/news';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'upso-form-news',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent extends StatusComponent implements OnInit {
  @Input() newsItem: News;
  @Input() title: string;
  @Output() updateTable: EventEmitter<News> = new EventEmitter();
  @ViewChild('closebutton', { static: false }) closebutton: ElementRef;
  public myNewsItem: News;

  constructor(
    protected _router: Router,
    protected _user: UserService,
    protected _news: NewsService
  ) {
    super(_router);
  }

  ngOnInit(): void {
    this.myNewsItem = (this.newsItem === undefined) ? this._news.dummy() : { ...this.newsItem };
  }

  confirmar = () => {
    (this.myNewsItem.id === 0) ? this.insert() : this.update();
  }

  insert() {
    this.setLoading()
    const token = this._user.getToken();
    this._news.insert(this.myNewsItem, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.newsItem = this._news.dummy();
        this.myNewsItem = this._news.dummy();
        this.updateTable.emit(response);
      },
      (error) => this.processError(error)
    );
  }

  update() {
    this.setLoading()
    const token = this._user.getToken();
    this._news.update(this.myNewsItem, token).subscribe(
      (response) => {
        this.closebutton.nativeElement.click();
        this.setSuccess();
        this.newsItem = response;
        this.myNewsItem = { ...this.newsItem };
        this.updateTable.emit(this.newsItem);
      },
      (error) => this.processError(error)
    );
  }
}
