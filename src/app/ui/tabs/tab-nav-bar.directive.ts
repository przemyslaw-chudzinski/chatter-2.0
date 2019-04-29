import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTabNavBar]'
})
export class TabNavBarDirective implements OnInit {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'tab-nav-bar');
  }

}
