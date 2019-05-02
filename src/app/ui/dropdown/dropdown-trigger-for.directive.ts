import {Directive, HostListener, Input} from '@angular/core';
import {DropdownComponent} from './dropdown/dropdown.component';

@Directive({
  selector: '[appDropdownTriggerFor]'
})
export class DropdownTriggerForDirective {

  @Input('appDropdownTriggerFor') componentRef: DropdownComponent;

  @HostListener('click')
  clickHandler(): void {
    this.componentRef && this.componentRef.open();
  }

}
