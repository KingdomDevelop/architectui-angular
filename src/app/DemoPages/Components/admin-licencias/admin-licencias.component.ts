import { Component, OnInit } from '@angular/core';

export interface Trabajador {
  id: number;
  nombre: string;
  cargo:string;
  dias: string;
}

@Component({
  selector: 'app-admin-licencias',
  templateUrl: './admin-licencias.component.html',
  styleUrls: ['./admin-licencias.component.sass']
})

export class AdminLicenciasComponent implements OnInit {

  heading = 'Form Controls Licence';
  subheading = 'Wide selection of forms controls, using the Bootstrap 4 code base, but built with Vue.';
  icon = 'pe-7s-eyedropper icon-gradient bg-premium-dark';

  public integrantes: Trabajador[];

  
  constructor() { }

  ngOnInit() {
    
    this.integrantes=[
      { id: 1, nombre: 'Maximiliano Andres', cargo: 'Junior', dias: '05'},
      { id: 2, nombre: 'Rodrigo Nicolas', cargo: 'Estudiante', dias: '15' },
      { id: 3, nombre: 'Gaspar', cargo: 'Junior', dias: '01'},
      { id: 4, nombre: 'Loca', cargo: 'Gerente', dias: '03'},
    ]

  }

}
