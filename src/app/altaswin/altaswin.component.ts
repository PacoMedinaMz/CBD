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
    if (true) {
      console.log(this.asgForm);
      
      return false;
    }
    var e = this.asgForm.value.eno;
    var p = this.asgForm.value.pno;
    var r = this.asgForm.value.resp;
    var d = this.asgForm.value.dur;
    //console.log(e, p, resp, dur); no toma los valores 

    var eno = "E";
    eno.concat(e.toString());
    var pno = "P";
    pno.concat(p.toString());

    var resp = r.toString();
    var dur = d.toString();

    var asgJson =
    {
      "eno": eno,
      "pno": pno,
      "resp": resp,
      "dur": dur
    };

    this.http.post<any>('http://192.168.1.76:3003/windows/altaAsg', asgJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

    this.http.post<any>('http://192.168.1.76:3003/linux/altaAsgR', asgJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })
  }

  clickEnviarEmp () {
    if (true) {
      console.log(this.empForm);
      
      return false;
    }
    var e = this.empForm.value.emp;
    var en = this.empForm.value.ename;
    var t = this.empForm.value.title;;

    var eno = "E";
    eno.concat(e.toString());
    var ename = en.toString();
    var title = t.toString();

    var empJson =
    {
      "eno": eno,
      "ename": ename,
      "title": title
    };

    this.http.post<any>('http://192.168.1.76:3003/windows/altaEno', empJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

    this.http.post<any>('http://192.168.1.76:3003/linux/altaEnoR', empJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })
  }

  clickEnviarPay () {
    if (true) {
      console.log(this.payForm);
      
      return false;
    }
    var p = this.payForm.value.payno;
    var t = this.payForm.value.title;
    var s = this.payForm.value.sal;

    var payno = "Py";
    payno.concat(p.toString());
    var title = t.toString();
    var sal = s.toString();

    var payJson =
    {
      "payno": payno,
      "title": title,
      "sal": sal
    };

    this.http.post<any>('http://192.168.1.76:3003/windows/altaPay', payJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

    this.http.post<any>('http://192.168.1.76:3003/linux/altaPayR', payJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

  }

  clickEnviarProj () {
    if (true) {
      console.log(this.projForm);
      
      return false;
    }
    var p = this.projForm.value.pno;
    var pn = this.projForm.value.pname;
    var b = this.projForm.value.budget;

    var pno = "P";
    pno.concat(p.toString());
    var pname = pn.toString();
    var budget = b.toString();

    var projJson =
    {
      "pno": pno,
      "pname": pname,
      "budget": budget
    };

    this.http.post<any>('http://192.168.1.76:3003/windows/altaProj', projJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

    this.http.post<any>('http://192.168.1.76:3003/linux/altaProjR', projJson).subscribe({
      next: data => {  
        if (data.status === 'error') {
          this.error();
        } else {
          this.success();
        }
      },
      error: error => {
        console.error('ERROR al generar reporte', error.message);
      }
    })

  }
}