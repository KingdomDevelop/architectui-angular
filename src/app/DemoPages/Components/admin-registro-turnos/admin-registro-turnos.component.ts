import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-registro-turnos',
  templateUrl: './admin-registro-turnos.component.html',
  styleUrls: ['./admin-registro-turnos.component.sass']
})
export class AdminRegistroTurnosComponent implements OnInit {

  heading = 'Form Controls Turnos';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-note icon-gradient bg-premium-dark';
  constructor() { }

  ngOnInit() {
  }

}
