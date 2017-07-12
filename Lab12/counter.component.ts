import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h1>Exercise 1</h1>
    <p> <button (click)="increment()">+</button>
    {{counter}}
    <button (click)="decrement()">-</button></p>
  `,
  styles: []
})
export class CounterComponent implements OnInit {
counter:number=0;
  constructor() {
    this.counter = 0;
   }
increment(){
  this.counter+=1;
}
decrement(){
  this.counter-=1;
}
  ngOnInit() {
  }
}
