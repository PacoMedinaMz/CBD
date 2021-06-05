import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-altaswin',
  templateUrl: './altaswin.component.html',
  styleUrls: ['./altaswin.component.scss']
})
export class AltaswinComponent implements OnInit {

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
