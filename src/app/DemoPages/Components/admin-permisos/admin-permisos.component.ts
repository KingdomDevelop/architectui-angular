import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-permisos',
  templateUrl: './admin-permisos.component.html',
  styleUrls: ['./admin-permisos.component.sass']
})
export class AdminPermisosComponent implements OnInit {

  heading = 'Form Controls permission';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-like2 icon-gradient bg-premium-dark';
  constructor() { }

  ngOnInit() {
  }

}
