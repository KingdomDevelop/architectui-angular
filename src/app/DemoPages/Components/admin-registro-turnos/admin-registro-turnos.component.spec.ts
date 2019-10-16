import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRegistroTurnosComponent } from './admin-registro-turnos.component';

describe('AdminRegistroTurnosComponent', () => {
  let component: AdminRegistroTurnosComponent;
  let fixture: ComponentFixture<AdminRegistroTurnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRegistroTurnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRegistroTurnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
