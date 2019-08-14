import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { InfoPagina, InfoEquipo } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: InfoEquipo = {} ;


  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
    }

    private cargarInfo() {
      console.log('Servicio InfoPagina cargado');
    // leer archivo JSON
      this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
      });
    }

    private cargarEquipo() {
      console.log('Servicio Equipo cargado');
    // leer archivo JSON
      this.http.get('https://resistencias-79d56.firebaseio.com/equipo.json')
    .subscribe( (resp: InfoEquipo) => {
      this.equipo = resp;
      //  console.log( this.equipo );
      });
    }
}
