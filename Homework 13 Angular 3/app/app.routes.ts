import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./home-page/home-page.component";
import {StudentsComponent} from "./students/students.component";
import {ProfileComponent} from "./profile/profile.component";
import {MyCanActivateGuard} from "./guards/mycanactivate.guard";
import {MyCanDeactivateGuard} from "./guards/mycandeactivate.guard";
import {ErrorComponent} from "./error/error.component";


const MY_ROUTES: Routes = [
     { path: '', component: HomePageComponent }, 
     { path:'students',
       component:StudentsComponent,
       children: [  
      { path: 'profile/:id', component: ProfileComponent, canActivate:[MyCanActivateGuard] }
       ]
      } ,   
       { path:'error', component:ErrorComponent },   
     { path: '**', redirectTo: '/' }    
];

export const myRoutes = RouterModule.forRoot(MY_ROUTES);
