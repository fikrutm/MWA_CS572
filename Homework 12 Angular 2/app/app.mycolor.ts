
import { Directive,ElementRef,Renderer,HostListener,HostBinding,Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class MycolorDirective {
 colors:any[]=['#ff3333',' #3333cc','#009900',' #660066','#996600','#ff33cc','#00ffff'];



  constructor(private elementref:ElementRef,private renderer:Renderer){}
   
  @HostListener('click') foo(){    
  this.elementref.nativeElement.style.color=
   
    this.colors[Math.floor(Math.random()*7)];
    console.log(this.colors[Math.floor(Math.random()*7)])
  };
  




}
