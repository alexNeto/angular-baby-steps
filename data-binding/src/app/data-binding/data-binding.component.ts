import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: String;
  urlImagen: String;
  cursoAngular: boolean;

  constructor() {
    this.url = 'https://github.com/alexNeto';
    this.urlImagen = 'http://lorempixel.com/400/200/nature/';
    this.cursoAngular = true;
   }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }
}
