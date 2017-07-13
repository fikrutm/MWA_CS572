import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>List of Students </h1>
        <ul>
        <li *ngFor="let student of students; let i=index">{{i+1}} - {{student}} </li>
        </ul>
        <hr>
          <h1>to Uppercase</h1>
            <div upper>to upper case </div>

            <hr>
            <h1>My Visibility</h1>
            <h1 myvisibility>Visibility hide</h1>
             
             <h1 mycolor> MyColor directive click to change color</h1>
                         <hr>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
  students: any[] = ["George", "Rackish", "John", "Doe"];

  @Input('arrayIn') arrayInput: string[];
  public ccolor: string;
  constructor() {
    this.arrayInput = [];
  }

  ngOnInit() {

  }
  catchcolor(eve) {
    this.ccolor = eve;
  }


}
