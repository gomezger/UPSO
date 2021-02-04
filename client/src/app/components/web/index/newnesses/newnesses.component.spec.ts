import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnessesComponent } from './newnesses.component';

describe('NewnessesComponent', () => {
  let component: NewnessesComponent;
  let fixture: ComponentFixture<NewnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnessesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
