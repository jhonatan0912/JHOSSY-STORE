import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactoForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mensaje: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }
  process() {
    // console.log(this.contactoForm.status);

    if (this.contactoForm.status != "INVALID") {
      Swal.fire({
        title: 'Success',
        text: 'Gracias por contactarnos!',
        icon: 'success',
        confirmButtonText: 'CLOSE'
      })
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Verificar que los datos sean correctos y sean del formato correcto',
        icon: 'error',
        confirmButtonText: 'CLOSE'
      })
      // }
    }
  }
}