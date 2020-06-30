import { Component, OnInit } from '@angular/core';
import { OllasService } from '../services/ollas.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor( private ollasService: OllasService ) {

  }


  ngOnInit() {
    this.ollasService.getFeature()
      .subscribe( resp => {
        this.peliculasRecientes = resp.results;
      });

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.ollasService.getPopulares()
    .subscribe( resp => {
      // console.log('Populares', resp.results);
      const arrTemp = [ ...this.populares, ...resp.results ];
      this.populares = arrTemp;

    });
  }

}
