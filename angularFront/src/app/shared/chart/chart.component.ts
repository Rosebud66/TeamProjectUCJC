import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  dataSource: any;
  constructor() {
    this.dataSource = {
      labels: [
        "Ejercicios resueltos", 
        "Temarios completados"
      ],
      datasets: [
        {
          label: "Matemáticas",
          backgroundColor: "red",
          data: 
          [
            85, 
            89
          ]
        },
        {
          label: "Biología",
          backgroundColor: "green",
          data: [
            45, 
            209
          ]
        },
        {
          label: "Lengua",
          backgroundColor: "blue",
          data: [
            106, 
            57
          ]
        }
      ]
    };
  }
  ngOnInit() {}
}
