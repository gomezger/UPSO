import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigatorSkeletonComponent } from './investigator-skeleton.component';

describe('InvestigatorSkeletonComponent', () => {
  let component: InvestigatorSkeletonComponent;
  let fixture: ComponentFixture<InvestigatorSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestigatorSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigatorSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
