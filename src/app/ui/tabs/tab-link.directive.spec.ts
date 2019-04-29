import { TabLinkDirective } from './tab-link.directive';
import {ElementRef, Renderer2} from '@angular/core';

describe('TabLinkDirective', () => {

  let directive;

  beforeEach(() => {
    directive = new TabLinkDirective({} as ElementRef, {} as Renderer2);
  });


  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
