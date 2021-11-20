import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'upso-skeleton-loader',
  template: `
      <div [ngStyle]="getMyStyles()" class="skelt-load loader">
      </div>
  `,
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent {
  @Input() Cwidth: number;
  @Input() Cheight: number;
  @Input() circle: boolean;
  @Input() type = 'px';


  getMyStyles(): {} {
    const myStyles = { };
    myStyles['width.' + this.type] = this.Cwidth ? this.Cwidth : '';
    myStyles['height.px'] = this.Cheight ? this.Cheight : '';
    myStyles['border-radius'] = this.circle ? '50%' : '';
    return myStyles;
  }

}
