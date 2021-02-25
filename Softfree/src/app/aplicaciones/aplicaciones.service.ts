import { Injectable } from '@angular/core';
import { Aplicacion } from './aplicaciones.model';
import { Conexion } from './../conexion';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AplicacionesService {

  public url: string;
  public aplicacion: Aplicacion[];


  constructor(public http: HttpClient) {
    this.url = Conexion.url;

   }

   getAplications(){

    const headers = new HttpHeaders().set('Content-Type', 'aplication/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization')
    // .set('token', token);

    console.log('aplicaciones desde apirest');
    console.log(this.url + 'catalogosApp/aplicacion');
    console.log(this.http.get(this.url + 'catalogosApp/aplicacion', {headers}));
    return this.http.get(this.url + 'catalogosApp/aplicacion', {headers});
  }
  /*getAplication(id):Observable<Aplicacion> {
    let catalogosApp = this.url + "/catalogosApp/aplicacion/" + id
    return this.http.get<Aplicacion>(catalogosApp);
  }*/

  getAplicacion(aplicacionId: string) {
    return{
      ...this.aplicacion.find(aplication => {
        return aplication.id === aplicacionId
      })
    }
  }
}
