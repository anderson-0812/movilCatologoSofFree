import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Licencia } from './licencia.model';
import{ LicenciasService} from"./licencias.service";

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.page.html',
  styleUrls: ['./licencias.page.scss'],
})
export class LicenciasPage implements OnInit {

  licences: any;
  constructor(private router: Router, private licenciaService: LicenciasService) { }

  ngOnInit() {
    this.licences = this.getLicences();
  }

  // Recarga la vista con datos actualizados sirve para que los datos que se eliminan o cambien se reflejen
  ionViewWillEnter(){
  
    this.licences = this.getLicences();

  }

  getLicences(){
    console.log('Funcionando metodo get licencias');
    this.licenciaService.getLicences().subscribe(
      (res) => {
        console.log('Hola desde componente metodo get dentro del res');
        console.log(res);
        // this.users = res;
        this.licenciaService.licencia = res as Licencia[];
        this.licences = this.licenciaService.licencia;
      }
      , error => console.log(error as any));
  }
}
