import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Aplicacion } from './aplicaciones.model';
import{ AplicacionesService} from"./aplicaciones.service";

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.page.html',
  styleUrls: ['./aplicaciones.page.scss'],
})
export class AplicacionesPage implements OnInit {

  aplications: any;
  constructor(private activerouter:ActivatedRoute,private router: Router, private aplicacionesService: AplicacionesService) { }

  ngOnInit() {
  
    this.aplications = this.getAplications();
  }

  // Recarga la vista con datos actualizados sirve para que los datos que se eliminan o cambien se reflejen
  ionViewWillEnter(){
    let aplicationid = this.activerouter.snapshot.paramMap.get('id')
    this.aplications = this.getAplications();

  }

  getAplications(){
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
