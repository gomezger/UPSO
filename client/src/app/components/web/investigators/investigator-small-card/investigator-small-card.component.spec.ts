import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorSmallCardComponent } from './investigator-small-card.component';

describe('InvestigatorSmallCardComponent', () => {
  let component: InvestigatorSmallCardComponent;
  let fixture: ComponentFixture<InvestigatorSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigatorSmallCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
