import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input()
  valor: number;
  @Output()
  mudouValor: any;

  constructor() {
    this.valor = 0;
    this.mudouValor = new EventEmitter();
  }

  ngOnInit() {
  }

  inc() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  dec() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

}
