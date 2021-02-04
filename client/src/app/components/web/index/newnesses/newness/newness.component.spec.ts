import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnessComponent } from './newness.component';

describe('NewnessComponent', () => {
  let component: NewnessComponent;
  let fixture: ComponentFixture<NewnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
