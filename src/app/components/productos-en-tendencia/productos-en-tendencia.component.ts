import { Component, OnInit } from '@angular/core';
import { ProductosTendenciaService } from "src/app/services/productos-tendencia.service";

@Component({
  selector: 'app-productos-en-tendencia',
  templateUrl: './productos-en-tendencia.component.html',
  styleUrls: ['./productos-en-tendencia.component.css']
})
export class ProductosEnTendenciaComponent implements OnInit {

  productosTendenciaList: any = [];

  constructor(private pts: ProductosTendenciaService) { }

  ngOnInit(): void {
    this.pts.obtenerProductosTendencia()
      .subscribe((response: any) => this.productosTendenciaList = response)
  }

}
