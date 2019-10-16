import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: string;
  population: string;
}

interface LicenciaMedica {
  numero:number;
  name: string;
  enfermedad: string;
  area: string;
  fInicio: string;
  fTermino: string;
}

const COUNTRIES: Country[] = [
  {
    name: 'Alejandro Sanz',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 'Teleoperador',
    population: '01/09/2019'
  },
  {
    name: 'Maria Sepulveda',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 'Colectivo',
    population: '28/08/2019'
  },
  {
    name: 'Miguel Perez',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 'Colectivo',
    population: '07/08/2019'
  },
  {
    name: 'Daniela Mendoza',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 'Ejecutiva',
    population: '27/07/2019'
  },
  {
    name: 'Paola Galaz',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 'Ejecutiva',
    population: '22/07/2019'
  }
];

const LICENCIASMEDICAS: LicenciaMedica[] = [
  {
    numero:0,
    name: 'JP',
    enfermedad: 'Resfriado Común',
    area: 'Ejecutivo',
    fInicio: '12/07/2019',
    fTermino: '18/07/2019'
  },
  {
    numero:1,
    name: 'JP',
    enfermedad: 'Faringitis',
    area: 'Colectivo',
    fInicio: '24/07/2019',
    fTermino: '28/07/2019'
  }
]
@Component({
  selector: 'app-visualizar-permisos-licencias',
  templateUrl: './visualizar-permisos-licencias.component.html',
  styleUrls: ['./visualizar-permisos-licencias.component.sass']
})
export class VisualizarPermisosLicenciasComponent implements OnInit {

  heading = 'Lista Permisos y Licencias';
  subheading = 'Las licencias médicas solamente pueden ser prescritas por un médico cirujano (incluidos los psiquiatras), un cirujano dentista o una matrona.';
  icon = 'pe-7s-note2 icon-gradient bg-sunny-morning';
  
  constructor() { }

  countries = COUNTRIES;
  licenciasmedicas=LICENCIASMEDICAS;

  ngOnInit() {

  }

}
