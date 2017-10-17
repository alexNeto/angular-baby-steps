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
  valorAtual: String;
  valorSalvo: String;
  isMouseOver: boolean;
  nome: String;
  nomeCurso: String;

  constructor() {
    this.url = 'https://github.com/alexNeto';
    this.urlImagen = 'http://lorempixel.com/400/200/nature/';
    this.cursoAngular = true;
    this.isMouseOver = false;
    this.nome = 'abc';
    this.nomeCurso = 'Angular';
   }

  ngOnInit() {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert();
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;

  }

  salvaValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento);

  }
}
