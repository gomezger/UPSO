import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperCardComponent } from './paper-card.component';

describe('PaperCardComponent', () => {
  let component: PaperCardComponent;
  let fixture: ComponentFixture<PaperCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaperCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaperCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
