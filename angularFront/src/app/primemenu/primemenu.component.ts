import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-primemenu',
  templateUrl: './primemenu.component.html',
  styleUrls: ['./primemenu.component.scss']
})
export class PrimemenuComponent implements OnInit {
  items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
        {
            label:'Martín',
            icon:'pi pi-fw pi-file',
        },
        {
          label:'Asignaturas',
          icon:'pi pi-fw pi-user',
          items:[
              {
                  label:'Biología',
                  icon:'pi pi-fw pi-user-plus',

              },
              {
                  label:'Lengua',
                  icon:'pi pi-fw pi-user-minus',

              },
              {
                  label:'Matemáticas',
                  icon:'pi pi-fw pi-users',
                  items:[
                  {
                      label:'Geometría',
                      icon:'pi pi-fw pi-filter',
                  },
                  {
                      label:'Estadística', 
                      icon:'pi pi-fw pi-bars'
                      
                  }
                  ]
              }
          ]
        },
        {
            label:'Ajustes',
            icon:'pi pi-fw pi-calendar',
        },
    ];
}
}
