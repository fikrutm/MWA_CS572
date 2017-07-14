import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  template: '<h2 [ngClass]="{err:true}">Error occurred when you enter the params for this route..!!! Please enter the correct params... </h2>',
  styles: ['.err{color:red;}']
})
export class ErrorComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
