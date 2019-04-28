import { Directive } from '@angular/core';

@Directive({
  selector: '[appTabNavBar]',
  host: {
    class: 'tab-nav-bar'
  }
})
export class TabNavBarDirective {}
