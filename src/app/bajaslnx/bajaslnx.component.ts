import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bajaslnx',
  templateUrl: './bajaslnx.component.html',
  styleUrls: ['./bajaslnx.component.scss']
})
export class BajaslnxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  warning() {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: '¿Estás seguro de borrarlo?',
      text: "¡No podrás deshacer este cambio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borralo!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          'Borrado!',
          'Los datos han sido borrados.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Los datos permanecen en la BD',
          'error'
        )
      }
    })
  }

  error() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: '¡los datos no han sido eliminados!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
