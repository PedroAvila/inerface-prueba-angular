import { Component, OnInit } from '@angular/core';
import { Trabajador } from '../models/trabajador.model';
import { TrabajadorService } from '../service/trabajador.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-trabajador',
  templateUrl: './trabajador.component.html',
  styleUrls: ['./trabajador.component.css']
})
export class TrabajadorComponent implements OnInit {
  trabajadores: Trabajador[] = [];
  pageSize = 10;
  desde: number = 0;
  hasta: number = 10;

  constructor(public trabajadorService: TrabajadorService){}

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.trabajadorService.getAll().subscribe((response: any) =>{
      const trabajadorData = response.data;
      this.trabajadores = trabajadorData.map((trabajador:any)=>({
        dni: trabajador.dni,
        tipo: trabajador.tipo,
        sueldo: trabajador.sueldo,
        salarioBonificacion: trabajador.salarioBonificacion,
        montoFinal: trabajador.montoFinal
      }));
      console.log(this.trabajadores);
    })
  }

  cambiarPagina(e:PageEvent){
    console.log(e);
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }

}
