import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'upso-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent implements OnInit {
  @Input() title = '';
  @Input() text = '';
  @Input() img = '';
  @Input() url = '';


  constructor() { }

  ngOnInit(): void { }

}
