import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCalendarioComponent } from './admin-calendario.component';

describe('AdminCalendarioComponent', () => {
  let component: AdminCalendarioComponent;
  let fixture: ComponentFixture<AdminCalendarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCalendarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
