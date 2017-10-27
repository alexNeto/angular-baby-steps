import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string;
  @Input() appHighlight: string;

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.appHighlight;
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  constructor() {
    this.defaultColor = 'white';
    this.appHighlight = 'yellow';
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
