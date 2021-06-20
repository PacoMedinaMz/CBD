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

    fetch('http://localhost:3003/linux/conAsg', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Asg")
      })

      fetch('http://localhost:3003/linux/conEmp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Emp")
      })

      fetch('http://localhost:3003/linux/conEmp1', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Emp1")
      })

      fetch('http://localhost:3003/linux/conEmp2', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Emp2")
      })

      fetch('http://localhost:3003/linux/conEmp3', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Emp3")
      })

      fetch('http://localhost:3003/linux/conPay', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Pay")
      })

      fetch('http://localhost:3003/linux/conPay1', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Pay1")
      })

      fetch('http://localhost:3003/linux/conPay2', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Pay2")
      })

      fetch('http://localhost:3003/linux/conPay3', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Pay3")
      })

      fetch('http://localhost:3003/linux/conProj', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Proj")
      })
  
  }

  ngOnInit(): void {
  }

  
}
