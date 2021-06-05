import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-altaslnx',
  templateUrl: './altaslnx.component.html',
  styleUrls: ['./altaslnx.component.scss']
})
export class AltaslnxComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {
  }


  success() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Datos introducidos correctamente!',
      showConfirmButton: false,
      timer: 1500
    })

  }
}
