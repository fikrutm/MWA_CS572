import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'counter-one',
  template: `
  <hr>
  <h1>Exercise 2</h1>
    <p> <button (click)="increment()">+</button>
    {{counter}}
    <button (click)="decrement()">-</button></p>
    <hr>
        `,
  styleUrls: []
})
export class CounterOneComponent implements OnInit {

  counterValue: number=0;
  @Input() counter: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() { }
  
  ngOnInit() {
  }

  increment() {
    this.counter += 1;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {
    this.counter -= 1;
    this.counterValue = this.counter;
    this.counterChange.emit(this.counterValue);
  }


}

