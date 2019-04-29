import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ThemeColor} from '../types/theme-color.types';

@Directive({
  selector: '[appThemeProvider]'
})
export class ThemeProviderDirective implements OnInit {
  @Input() theme: ThemeColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.themeClassName);
  }

  get themeClassName(): string {
    switch (this.theme) {
      case 'primary': return 'theme-primary';
      case 'secondary': return 'theme-secondary';
      default: return 'theme-secondary';
    }
  }

}
