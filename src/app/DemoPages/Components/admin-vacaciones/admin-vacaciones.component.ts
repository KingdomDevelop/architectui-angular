import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-vacaciones',
  templateUrl: './admin-vacaciones.component.html',
  styleUrls: ['./admin-vacaciones.component.sass']
})
export class AdminVacacionesComponent implements OnInit {

  heading = 'Form Controls Vacation';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-sun icon-gradient bg-premium-dark';
  constructor() { }

  ngOnInit() {
  }

}
