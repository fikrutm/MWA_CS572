import { Component} from '@angular/core';
import { AuthService } from "../services/auth.service";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile:any;
   constructor(private auth:AuthService){
 console.log(localStorage.getItem('profile')) 
 this.profile= JSON.parse(localStorage.getItem('profile')); 
  }
}
