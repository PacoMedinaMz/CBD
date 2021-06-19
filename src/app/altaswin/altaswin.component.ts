import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

const ip = "192.168.1.76"

@Component({
  selector: 'app-altaswin',
  templateUrl: './altaswin.component.html',
  styleUrls: ['./altaswin.component.scss']
})
export class AltaswinComponent implements OnInit {

  asgForm: FormGroup;

  empForm: FormGroup;

  payForm: FormGroup;

  projForm: FormGroup;

  constructor(private http: HttpClient) { 
    console.log(`http://${ip}:3003/windows/${"altaAsg"}`); 

    this.asgForm = new FormGroup({
      eno: new FormControl(''),
      pno: new FormControl(''),
      resp: new FormControl(''),
      dur: new FormControl('')
    });
  
    this.empForm = new FormGroup({
      eno: new FormControl(''),
      ename: new FormControl(''),
      title: new FormControl('')
    });
  
    this.payForm = new FormGroup({
      payno: new FormControl(''),
      title: new FormControl(''),
      sal: new FormControl('')
    });
  
    this.projForm = new FormGroup({
      pno: new FormControl(''),
      pname: new FormControl(''),
      budget: new FormControl('')
    });
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

    var eno = `P${e}`;
    var pno = `E${p}`;

    var asgJson =
    {
      "eno": eno,
      "pno": pno,
      "resp": resp,
      "dur": dur
    };
    
    fetch('http://localhost:3003/windows/altaAsg', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(asgJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/windows/altaAsgR', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(asgJson)
    }).then(() => {
      console.log("Datos enviados...")
    })
  }

  clickEnviarEmp () {
    var e1 = this.empForm.value.eno;
    var ename = this.empForm.value.ename;
    var title = this.empForm.value.title;;
    console.log(e1);

    var eno = `E${e1}`;
    console.log(eno);

    var empJson =
    {
      "eno": eno,
      "ename": ename,
      "title": title
    };

    fetch('http://localhost:3003/windows/altaEmp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(empJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/windows/altaEmpR', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(empJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

  }

  clickEnviarPay () {
    var p = this.payForm.value.payno;
    var title = this.payForm.value.title;
    var sal = this.payForm.value.sal;
    var payno = `Py${p}`;

    var payJson =
    {
      "payno": payno,
      "title": title,
      "sal": sal
    };

    fetch('http://localhost:3003/windows/altaPay', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(payJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/windows/altaPayR', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(payJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

  }

  clickEnviarProj () {
    var p = this.projForm.value.pno;
    var pname = this.projForm.value.pname;
    var budget = this.projForm.value.budget;
    var pno = `P${p}`;

    var projJson =
    {
      "pno": pno,
      "pname": pname,
      "budget": budget
    };

    fetch('http://localhost:3003/windows/altaProj', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(projJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/windows/altaProjR', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(projJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

  }
}