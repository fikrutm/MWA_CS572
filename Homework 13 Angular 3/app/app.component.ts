import { Component } from '@angular/core';
import {DbService} from './db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
    providers:[DbService]
})
export class AppComponent {  
}
