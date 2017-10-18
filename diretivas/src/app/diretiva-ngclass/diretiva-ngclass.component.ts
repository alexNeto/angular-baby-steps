import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito: boolean;

  constructor() {
    this.meuFavorito = false;
   }

  ngOnInit() {
  }

onMeuFavorito() {
  this.meuFavorito = !this.meuFavorito;
}

}
