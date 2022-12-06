import { Component, OnInit } from '@angular/core';
import { ProductosService } from "src/app/services/productos.service";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productosList: any = []

  constructor(private ps: ProductosService) { }

  ngOnInit(): void {
    this.ps.obtenerProductos()
      .subscribe((response: any) => this.productosList = response)
  }

}
