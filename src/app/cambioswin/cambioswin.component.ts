import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cambioswin',
  templateUrl: './cambioswin.component.html',
  styleUrls: ['./cambioswin.component.scss']
})
export class CambioswinComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = true;
  }

  ngOnInit(): void {
  }
  success() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: '¡Datos modificados correctamente!',
      showConfirmButton: false,
      timer: 1500
    })

  }

  error() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '¡los datos no han sido modificados!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
