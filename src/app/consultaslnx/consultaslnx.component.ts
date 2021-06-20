import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  }
];


@Component({
  selector: 'app-consultaslnx',
  templateUrl: './consultaslnx.component.html',
  styleUrls: ['./consultaslnx.component.scss']
})
export class ConsultaslnxComponent implements OnInit {
  asg: any[] = [];
  countries = COUNTRIES;

  constructor() {
  
  }

  ngOnInit(): void {
  }

  
}
