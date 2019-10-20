import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingresar-licencia',
  templateUrl: './ingresar-licencia.component.html',
  styleUrls: ['./ingresar-licencia.component.sass']
})
export class IngresarLicenciaComponent implements OnInit {

  heading = 'Form Controls Licence';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-eyedropper icon-gradient bg-premium-dark';
  constructor() { }

  ngOnInit() {
  }

}
