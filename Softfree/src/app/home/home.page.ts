import { Component } from '@angular/core';
import{ AplicacionesService} from"./../aplicaciones/aplicaciones.service";
import { Aplicacion } from './../aplicaciones/aplicaciones.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  aplications:any;
  constructor(private aplicacionesService: AplicacionesService) { }

  ngOnInit() {
    this.getAplications(); // Envio el parametro de load pokemon
  }

  // El load pokemon obtendra los datos del pokemonSevice
  getAplications(loadMore = false, event?){
    console.log('Funcionando metodo get licencias');
    this.aplicacionesService.getAplications().subscribe(
      (res) => {
        console.log('Hola desde componente metodo get dentro del res');
        console.log(res);
        // this.users = res;
        this.aplicacionesService.aplicacion = res as Aplicacion[];
        this.aplications = this.aplicacionesService.aplicacion;
      }
      , error => console.log(error as any));

  }

}
