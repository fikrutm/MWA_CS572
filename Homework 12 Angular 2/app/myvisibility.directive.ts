import { Directive,HostBinding } from '@angular/core';

@Directive({
  selector: '[myvisibility]'
})
export class MyvisibilityDirective {

  constructor() {
    this.visibility = 'hidden';
  }

  @HostBinding('style.visibility') visibility;

  }
