import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ProductosEnTendenciaComponent } from './components/productos-en-tendencia/productos-en-tendencia.component';

import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosComponent } from './components/productos/productos.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    CarrouselComponent,
    ProductosEnTendenciaComponent,
    FooterComponent,
    ContactoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
