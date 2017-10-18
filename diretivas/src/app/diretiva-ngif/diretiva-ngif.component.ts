import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: String[];
  mostrarCursos: boolean;
  constructor() {
    this.mostrarCursos = true;
    this.cursos = [];
  }

  ngOnInit() {
  }

  mostrarEsconderCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
