import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLicenciasComponent } from './admin-licencias.component';

describe('AdminLicenciasComponent', () => {
  let component: AdminLicenciasComponent;
  let fixture: ComponentFixture<AdminLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
