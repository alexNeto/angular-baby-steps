import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer
} from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter')
  onMouseOver() {
    /*
     this._renderer.setElementStyle(
     this._elementRef.nativeElement,
     'background-color',
     'yellow'
    );
  */
    this.backgroundColor = 'yellow';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    /*
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'white'
    );
  */
    this.backgroundColor = 'white';
  }
  constructor(/*private _elementRef: ElementRef, private _renderer: Renderer*/) {}
}
