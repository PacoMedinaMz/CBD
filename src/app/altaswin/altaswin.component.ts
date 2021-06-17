import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-altaswin',
  templateUrl: './altaswin.component.html',
  styleUrls: ['./altaswin.component.scss']
})
export class AltaswinComponent implements OnInit {

  asgForm = new FormGroup({
    eno: new FormControl(''),
    pno: new FormControl(''),
    resp: new FormControl(''),
    dur: new FormControl('')
  });

  empForm = new FormGroup({
    eno: new FormControl(''),
    ename: new FormControl(''),
    title: new FormControl('')
  });

  payForm = new FormGroup({
    payno: new FormControl(''),
    title: new FormControl(''),
    sal: new FormControl('')
  });

  projForm = new FormGroup({
    pno: new FormControl(''),
    pname: new FormControl(''),
    budget: new FormControl('')
  });

  constructor() {
    console.log("Hola");

  }

  ngOnInit(): void {
  }

  success() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Datos agregados correctamente!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  error() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '¡los datos no han sido agregados!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  clickEnviarAsg () {
    var e = this.asgForm.value.eno;
    var p = this.asgForm.value.pno;
    var resp = this.asgForm.value.resp;
    var dur = this.asgForm.value.dur;

    var eno = "E";
    eno += e.toString();
    var pno = "P";
    pno += p.toString();

    var asgJson =
    {
      "eno": eno,
      "pno": pno,
      "resp": resp,
      "dur": dur
    };

    console.log(asgJson);
  }

  clickEnviarEmp () {
    var e = this.empForm.value.emp;
    var ename = this.empForm.value.ename;
    var title = this.empForm.value.title;;

    var eno = "E";
    eno += e.toString();

    var enoJson =
    {
      "eno": eno,
      "ename": ename,
      "title": title
    };

    console.log(enoJson);
  }

  clickEnviarPay () {
    var p = this.payForm.value.payno;
    var title = this.payForm.value.title;
    var sal = this.payForm.value.sal;

    var payno = "Py";
    payno += p.toString();

    var payJson =
    {
      "payno": payno,
      "title": title,
      "sal": sal
    };

    console.log(payJson);
  }

  clickEnviarProj () {
    var p = this.projForm.value.pno;
    var pname = this.projForm.value.pname;
    var budget = this.projForm.value.budget;

    var pno = "P";
    pno += p.toString();

    var projJson =
    {
      "pno": pno,
      "pname": pname,
      "budget": budget
    };

    console.log(projJson);
  }

  enviar(){
    /*
    this.http.post<any>('http://m.pacomedina.mx:4201/crud/final', jPuesto).subscribe({
      next: data => {
        if (data.status === 'error') {
          this.sendError("No se pudo generar reporte a causa de error del servidor.");
        } else {
          this.registerSuccess();
        }

      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })*/
  }
}
