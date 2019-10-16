import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-licencias',
  templateUrl: './admin-licencias.component.html',
  styleUrls: ['./admin-licencias.component.sass']
})



export class AdminLicenciasComponent implements OnInit {

  heading = 'Form Controls Licence';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-eyedropper icon-gradient bg-premium-dark';

  constructor() { }

  ngOnInit() {
  }

}
