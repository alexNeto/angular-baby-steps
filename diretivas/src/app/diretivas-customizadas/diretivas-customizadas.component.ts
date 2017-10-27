import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {
  mostrarCursos: boolean;
  constructor() {
    this.mostrarCursos = true;
  }

  ngOnInit() {}

  mostrarEsconderCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
