import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosTendenciaService {

  constructor(private http: HttpClient) { }

  obtenerProductosTendencia(): any {
    return this.http.get('https://jhonatan0912.github.io/JHOSSY-API/products-home.json')
  }
}
