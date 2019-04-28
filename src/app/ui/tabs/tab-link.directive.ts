import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appTabLink]',
  host: {
    class: 'tab-link'
  }
})
export class TabLinkDirective implements OnInit {

  @Input() active: boolean;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.active && this.renderer.addClass(this.elementRef.nativeElement, 'active');
  }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

}
