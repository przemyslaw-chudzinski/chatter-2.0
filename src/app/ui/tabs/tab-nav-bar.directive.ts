import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ThemeColor} from '../../types/theme-color.types';

@Directive({
  selector: '[appTabNavBar]',
  host: {
    class: 'tab-nav-bar'
  }
})
export class TabNavBarDirective implements OnInit {
  @Input() theme: ThemeColor = 'primary';

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, this.cssClasses);
  }

  get cssClasses() {
    switch (this.theme) {
      case 'primary': return 'theme-primary';
      case 'secondary': return 'theme-secondary';
      default: return 'theme-secondary';
    }
  }

}
