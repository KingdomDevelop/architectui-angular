import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-calendario',
  templateUrl: './admin-calendario.component.html',
  styleUrls: ['./admin-calendario.component.sass']
})
export class AdminCalendarioComponent implements OnInit {

  heading = 'Form Controls Calendar';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-timer icon-gradient bg-premium-dark';

  constructor() { }

  title='Calendario';

  ngOnInit() {
  }

}
