import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    this.log('ngOnChanges()');
  }

  ngOnInit() {
    this.log('ngOnInit()');
  }

  ngDoCheck() {
    this.log('ngDoCheck()');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit()');
  }

  ngAfterViewChecked() {
      this.log('ngAfterViewChecked()');
  }

  ngOnDestroy() {
  this.log('ngOnChanges()');
}
  private log(hook: String) {
    console.log(hook);
  }

}
