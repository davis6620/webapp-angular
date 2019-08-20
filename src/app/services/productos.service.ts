import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
 cargando = true;
 productos: Producto[] = [];
 productosFiltrado: Producto[] = [];
  constructor( private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    // tslint:disable-next-line:no-unused-expression
    return new Promise (( resolve, reject ) => {
      this.http.get('https://resistencias-79d56.firebaseio.com/productos_idx.json')
      .subscribe(  (resp: Producto[]) => {
          this.productos = resp;
          this.cargando = false;
          resolve();
      });
    });
  }


  getProducto(id: string) {
    return this.http.get(`https://resistencias-79d56.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino: string) {
    if ( this.productos.length === 0) {
      this.cargarProductos().then (() => {
        this.filtrarProductos( termino );
      });
    } else{
      this.filtrarProductos( termino );
    }
  }

  filtrarProductos(termino: string) {
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const titulotoLower = prod.titulo.toLocaleLowerCase();
      if (prod.categoria.indexOf(termino) >= 0 || titulotoLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(prod);
      }
    });
  }
}


