import {DbService} from "../db.service";
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs/Rx";
 import { Injectable} from '@angular/core';
 import {Router} from "@angular/router"

@Injectable()
export class MyCanActivateGuard implements CanActivate {

  constructor(private db:DbService,private router:Router){ 

  }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {   
  
   var k=route.params['id'];
   var result=false;
   var jsond=this.db.getData();
       for(var item of jsond){
         if(item['id']==k){
              result=true;
              console.log("okay");
              break;
         }
       }
       if(!result){
      this.router.navigate(['error']);
       }
       return true;

    
  }
}
