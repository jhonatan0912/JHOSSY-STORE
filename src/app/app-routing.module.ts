import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: InicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
