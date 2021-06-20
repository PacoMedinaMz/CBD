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
  selector: 'app-consultaswin',
  templateUrl: './consultaswin.component.html',
  styleUrls: ['./consultaswin.component.scss']
})
export class ConsultaswinComponent implements OnInit {
  asg: any[] = [];

  countries = COUNTRIES;

  constructor() {
    fetch('http://localhost:3003/windows/conAsg', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Asg")
      })

      fetch('http://localhost:3003/windows/conAsg1', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Asg1")
      })

      fetch('http://localhost:3003/windows/conAsg2', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Asg2")
      })

      fetch('http://localhost:3003/windows/conAsg3', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Asg3")
      })

      fetch('http://localhost:3003/windows/conEmp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Emp")
      })

      fetch('http://localhost:3003/windows/conPay', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Pay")
      })

      fetch('http://localhost:3003/windows/conProj', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Proj")
      })

      fetch('http://localhost:3003/windows/conProj1', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Proj1")
      })

      fetch('http://localhost:3003/windows/conProj2', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Proj2")
      })

      fetch('http://localhost:3003/windows/conProj3', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      } }).then(() => {
        console.log("Proj3")
      })
  }

  ngOnInit(): void {
  }

}