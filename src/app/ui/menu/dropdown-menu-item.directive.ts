import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdownMenuItem]'
})
export class DropdownMenuItemDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, 'dropdown-menu-item');
    this.renderer.addClass(this.elementRef.nativeElement.querySelector('.content'), 'menu-item');
  }

}
