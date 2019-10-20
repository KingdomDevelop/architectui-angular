import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-permiso',
  templateUrl: './ingresar-permiso.component.html',
  styleUrls: ['./ingresar-permiso.component.sass']
})
export class IngresarPermisoComponent implements OnInit {

  heading = 'Form Controls permission';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-id icon-gradient bg-premium-dark';
  constructor() { }

  ngOnInit() {
  }

}
