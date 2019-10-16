import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPermisosLicenciasComponent } from './visualizar-permisos-licencias.component';

describe('VisualizarPermisosLicenciasComponent', () => {
  let component: VisualizarPermisosLicenciasComponent;
  let fixture: ComponentFixture<VisualizarPermisosLicenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPermisosLicenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPermisosLicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
