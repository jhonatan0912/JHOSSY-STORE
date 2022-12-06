import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): any {
    return this.http.get('https://jhonatan0912.github.io/JHOSSY-API/products.json')
  }
}
