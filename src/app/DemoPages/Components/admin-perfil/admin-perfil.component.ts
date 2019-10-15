import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Nueva Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Nueva Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'Nuevo United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'Nueva China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

export interface Option {
  id: number;
  description: string;
}

export interface Contact {
  name: string;
  isVIP: boolean;
  gender: string;
  workStatus: number | string;
  company: string;
  education: string;
}

export interface Trabajador {
  id: number;
  nombre: string;
  cargo: string;
  ciudad: string;
  telefono: number;
}

@Component({
  selector: 'app-admin-perfil',
  templateUrl: './admin-perfil.component.html',
  styleUrls: ['./admin-perfil.component.sass']
})
export class AdminPerfilComponent implements OnInit {

  heading = 'Admin Perfil';
  subheading = 'Las tablas son la columna vertebral de casi todas las aplicaciones web.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  header = 'Perfiles';
  description = 'Administración de la lista de perfiles ';
  numContacts = 0;

  public counterClass = 'tag secondary';
  public formHidden = false;

  searchText: string = '';
  previous: string;

  public saveContact() {
    this.contacts.push({ ...this.contact });
    this.updateCounter();
  }
  private updateCounter() {
    this.numContacts = this.contacts.length;
    this.counterClass = this.numContacts === 0 ? 'tag secondary' : 'tag primary';
  }
    //Lo mensionado anteriormente se llama directiva de interpolación 
    //y es llamada dentro de doble llaves : {{ }}

    //La expresión interna hace referencia a variables que se obtienen de las propiedades 
    //de la clase controladora del componente. En este caso ContactsComponent y header, 
    //con su valor Contacts en ejecución. 
    //Este enlace mantiene la vista permanentemente actualizada 
    //a través de un potente sistema de detección del cambio.


    ///https://academia-binaria.com/formularios-tablas-y-modelos-de-datos-en-angular/

    public workStatuses: Option[];
    public contact: Contact;
    public contacts: Contact[];
    public integrantes: Trabajador[];

    public deleteContact(contact: Contact) {
      this.contacts = this.contacts.filter(c => c.name !== contact.name);
      this.updateCounter();
    }

  constructor() { }

  countries = COUNTRIES;
  
  ngOnInit() {

    this.workStatuses = [
      { id: 0, description: 'unknow' },
      { id: 1, description: 'student' },
      { id: 2, description: 'unemployed' },
      { id: 3, description: 'employed' }
    ];
    this.contact = {
      name: '',
      isVIP: false,
      gender: '',
      workStatus: 0,
      company: '',
      education: ''
    };
    this.contacts = [];


    this.integrantes=[
      { id: 1, nombre: 'Maximiliano Andres', cargo: 'Junior', ciudad: 'Santiago', telefono: 85698547 },
      { id: 2, nombre: 'Rodrigo Nicolas', cargo: 'Estudiante', ciudad: 'Santiago', telefono: 54785698 },
      { id: 3, nombre: 'Gaspar', cargo: 'Junior', ciudad: 'La Cisterna', telefono: 85456585 },
      { id: 4, nombre: 'Loca', cargo: 'Gerente', ciudad: 'Las Condes', telefono: 45665896 },
    ]
  
  }

  searchItems() {
    const prev = this.integrantes;
  }

}
