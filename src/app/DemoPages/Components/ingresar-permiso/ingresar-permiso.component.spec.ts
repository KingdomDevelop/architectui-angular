import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarPermisoComponent } from './ingresar-permiso.component';

describe('IngresarPermisoComponent', () => {
  let component: IngresarPermisoComponent;
  let fixture: ComponentFixture<IngresarPermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarPermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarPermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
