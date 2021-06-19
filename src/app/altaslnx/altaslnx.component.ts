import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-altaslnx',
  templateUrl: './altaslnx.component.html',
  styleUrls: ['./altaslnx.component.scss']
})
export class AltaslnxComponent implements OnInit {
  asgForm: FormGroup;

  empForm: FormGroup;

  payForm: FormGroup;

  projForm: FormGroup;

  constructor() {
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

    var eno = `E${e}`;
    var pno = `P${p}`;

    var asgJson =
    {
      "eno": eno,
      "pno": pno,
      "resp": resp,
      "dur": dur
    };
    
    fetch('http://localhost:3003/linux/altaAsg', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(asgJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/linux/altaAsgR', {
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
    var eno = `E${e1}`;

    var empJson =
    {
      "eno": eno,
      "ename": ename,
      "title": title
    };

    fetch('http://localhost:3003/linux/altaEmp', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(empJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/linux/altaEmpR', {
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

    fetch('http://localhost:3003/linux/altaPay', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(payJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/linux/altaPayR', {
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

    fetch('http://localhost:3003/linux/altaProj', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(projJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

    fetch('http://localhost:3003/linux/altaProjR', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      }, body: JSON.stringify(projJson)
    }).then(() => {
      console.log("Datos enviados...")
    })

  }
}
