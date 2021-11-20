import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectCardComponent } from './proyect-card.component';

describe('ProyectCardComponent', () => {
  let component: ProyectCardComponent;
  let fixture: ComponentFixture<ProyectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
