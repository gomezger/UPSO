import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() color = 'danger';

  constructor() { }

  ngOnInit(): void {
  }

}
