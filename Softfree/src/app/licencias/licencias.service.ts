import { Injectable } from '@angular/core';

//Permite conexion al Api o BD
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Licencia } from './licencia.model';
import { Conexion } from './../conexion';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  public url: string;
  public licencia: Licencia[];


  constructor(public http: HttpClient) {
    this.url = Conexion.url;

   }

   getLicences(){

    const headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization')
    // .set('token', token);

    console.log('licencias desde apirest');
    console.log(this.url + 'catalogosApp/licencia');
    console.log(this.http.get(this.url + 'catalogosApp/licencia', {headers}));
    return this.http.get(this.url + 'catalogosApp/licencia', {headers});
  }
}
