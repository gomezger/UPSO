import { GLOBAL } from './../../../../services/config/global';
import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news/news';

@Component({
  selector: 'upso-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {
  @Input() newsItem: News;
  public urlStorage: string;
  @Input() description = true;
  @Input() image = true;

  constructor() { }

  ngOnInit(): void {
    this.urlStorage = GLOBAL.url_storage;
  }

  public getResume(text: string, long: number = 100, ellipsis: boolean = true): string {
    text = text.replace(/<[^>]*>/g, '');

    if ((text.length < long)) {

      return text;

    } else {

      const recortar = text.slice(0, long);

      // quitar ultima palabra recortada
      const palabras = recortar.split(' ');
      palabras.splice(palabras.length - 1, 1);

      return (ellipsis) ? palabras.join(' ') + '...' : palabras.join(' ');

    }
  }


}
