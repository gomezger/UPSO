import { FilterService } from './../../../../services/filters/filter.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upso-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss', '../../panel.component.scss']
})
export class FilterComponent implements OnInit {
  @Input() list: Array<any>;
  @Input() keys: Array<string>;
  @Output() newList: EventEmitter<Array<any>> = new EventEmitter();
  public textPlaceholder: string;

  constructor(
    protected _filter: FilterService
  ) {
  }

  ngOnInit(): void {
    this.textPlaceholder = 'Filtrar por ' + this.keys.slice(0, this.keys.length - 1).join(', ') ;
    this.textPlaceholder += (this.keys.length === 1) ? this.keys[0] : ' o ' + this.keys[this.keys.length - 1];
  }

  filtrar({ target: { value } }): void {
    this.newList.emit(this._filter.filtrar(value, this.list, this.keys));
  }

}
