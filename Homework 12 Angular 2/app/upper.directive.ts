import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[upper]'
})
export class UpperDirective {

  constructor(element: ElementRef, r: Renderer) {
    r.setElementStyle(element.nativeElement, "text-transform", 'uppercase');
  }

}
