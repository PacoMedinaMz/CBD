import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: "app-bajaslnx",
  templateUrl: "./bajaslnx.component.html",
  styleUrls: ["./bajaslnx.component.scss"],
})
export class BajaslnxComponent implements OnInit {
  formAsg = new FormGroup({
    id: new FormControl(""),
  });
  formEmp = new FormGroup({
    id: new FormControl(""),
  });
  formPay = new FormGroup({
    id: new FormControl(""),
  });
  formProj = new FormGroup({
    id: new FormControl(""),
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  warning(functionCallback) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    let thas = this;

    swalWithBootstrapButtons
      .fire({
        title: "¿Estás seguro de borrarlo?",
        text: "¡No podrás deshacer este cambio!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, borralo!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          functionCallback(thas);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "Los datos permanecen en la BD",
            "error"
          );
        }
      });
  }

  clickEnviarAsg(thas) {
    //Usa thas en vez de this
    var id = thas.formAsg.value.id;

    thas.enviarPeticion(
      id,
      "http://192.168.1.76:3003/linux/bajaAsg",
      "http://192.168.1.76:3003/linux/bajaAsgR"
    );
  }

  clickEnviarEmp(thas) {
    //Usa thas en vez de this
    var id = thas.formEmp.value.id;

    thas.enviarPeticion(
      id,
      "http://192.168.1.76:3003/linux/bajaEmp",
      "http://192.168.1.76:3003/linux/bajaEmpR"
    );
  }

  clickEnviarPay(thas) {
    //Usa thas en vez de this
    var id = thas.formPay.value.id;

    thas.enviarPeticion(
      id,
      "http://192.168.1.76:3003/linux/bajaPay",
      "http://192.168.1.76:3003/linux/bajaPayR"
    );
  }

  clickEnviarProj(thas) {
    //Usa thas en vez de this
    var id = thas.formProj.value.id;

    thas.enviarPeticion(
      id,
      "http://192.168.1.76:3003/linux/bajaProj",
      "http://192.168.1.76:3003/linux/bajaProjR"
    );
  }

  enviarPeticion(id, url, url2) {
    var json = {
      id: id,
    };

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

  error() {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "¡los datos no han sido eliminados!",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  success() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "¡Datos eliminados correctamente!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
