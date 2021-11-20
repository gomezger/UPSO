import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectSkeletonComponent } from './proyect-skeleton.component';

describe('ProyectSkeletonComponent', () => {
  let component: ProyectSkeletonComponent;
  let fixture: ComponentFixture<ProyectSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectSkeletonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
