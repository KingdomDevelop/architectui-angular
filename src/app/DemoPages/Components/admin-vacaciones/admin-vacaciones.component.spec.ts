import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacacionesComponent } from './admin-vacaciones.component';

describe('AdminVacacionesComponent', () => {
  let component: AdminVacacionesComponent;
  let fixture: ComponentFixture<AdminVacacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVacacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
