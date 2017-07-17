import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html'
 // styleUrls: ['./jobe.component.css']
})
export class JobsComponent {
  profile:any;
   constructor(private auth:AuthService){
// console.log(localStorage.getItem('profile')) 
 this.profile= JSON.parse(localStorage.getItem('profile')); 
  }
}
