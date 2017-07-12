import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-two',
  template: `
  <h1>Exercise 3</h1>
   <p> <button (click)="increment()">+</button>
   {{ComponentCounterValue}}
    <button (click)="decrement()">-</button></p>
      Component counter value = {{ComponentCounterValue}}
  `,
})
export class CounterTwoComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
  }
  ComponentCounterValue:number=0;
  counterChange(data){
    this.ComponentCounterValue = data;
  }

}
