import { Component, OnInit } from "@angular/core";
import Swal from "sweetalert2";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";
import { HttpClient } from "@angular/common/http";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-cambioslnx",
  templateUrl: "./cambioslnx.component.html",
  styleUrls: ["./cambioslnx.component.scss"],
})
export class CambioslnxComponent implements OnInit {
  formAsg = new FormGroup({
    eno: new FormControl(""),
    pno: new FormControl(""),
    resp: new FormControl(""),
    dur: new FormControl(""),
  });
  formEmp = new FormGroup({
    eno: new FormControl(""),
    ename: new FormControl(""),
    title: new FormControl(""),
  });
  formPay = new FormGroup({
    payno: new FormControl(""),
    title: new FormControl(""),
    sal: new FormControl(""),
  });
  formProj = new FormGroup({
    proj: new FormControl(""),
    pname: new FormControl(""),
    budget: new FormControl(""),
  });

  constructor(config: NgbAccordionConfig, private http: HttpClient) {
    config.closeOthers = true;
  }

  ngOnInit(): void {}

  success() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Datos modificados correctamente!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  error() {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡los datos no han sido modificados!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  clickEnviarAsg() {
    var e = this.formAsg.value.eno;
    var p = this.formAsg.value.pno;
    var r = this.formAsg.value.resp;
    var d = this.formAsg.value.dur;

    console.log(e, p);

    var eno = "E" + e;
    var pno = "P" + p;

    var resp = r.toString();
    var dur = d.toString();

    var json = {
      eno: eno,
      pno: pno,
      resp: resp,
      dur: dur,
    };

    this.enviarPeticion(
      json,
      "http://192.168.1.76:3003/linux/cambioAsg",
      "http://192.168.1.76:3003/linux/cambioAsgR"
    );
  }

  clickEnviarEmp() {
    var e = this.formEmp.value.eno;
    var en = this.formEmp.value.ename;
    var t = this.formEmp.value.title;

    var eno = "E" + e;
    var ename = en.toString();
    var title = t.toString();

    var json = {
      eno: eno,
      ename: ename,
      title: title,
    };

    this.enviarPeticion(
      json,
      "http://192.168.1.76:3003/linux/cambioEmp",
      "http://192.168.1.76:3003/linux/cambioEmpR"
    );
  }

  clickEnviarPay() {
    var p = this.formPay.value.payno;
    var t = this.formPay.value.title;
    var s = this.formPay.value.sal;

    var payno = "Py" + p;
    var title = t.toString();
    var sal = s.toString();

    var json = {
      payno: payno,
      title: title,
      sal: sal,
    };

    this.enviarPeticion(
      json,
      "http://192.168.1.76:3003/linux/cambioPay",
      "http://192.168.1.76:3003/linux/cambioPayR"
    );
  }

  clickEnviarProj() {
    var p = this.formProj.value.proj;
    var pn = this.formProj.value.pname;
    var b = this.formProj.value.budget;

    var pno = "P" + p;
    var pname = pn.toString();
    var budget = b.toString();

    var json = {
      pno: pno,
      pname: pname,
      budget: budget,
    };

    this.enviarPeticion(
      json,
      "http://192.168.1.76:3003/linux/cambioProj",
      "http://192.168.1.76:3003/linux/cambioProjR"
    );
  }

  enviarPeticion(json, url, url2) {
    console.log(json);

    this.sendHttp(json, url);
    this.sendHttp(json, url2);
  }

  sendHttp(json, url) {
    this.http.post<any>(url, json).subscribe({
      next: (data) => {
        if (data.status === "error") {
          this.error();
        } else {
          this.success();
        }
      },
      error: (error) => {
        console.error("ERROR al generar reporte", error.message);
      },
    });
  }
}
