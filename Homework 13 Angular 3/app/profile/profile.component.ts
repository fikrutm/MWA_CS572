import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DbService} from '../db.service';
import {Subscription} from 'rxjs/Rx'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  
})
export class ProfileComponent implements OnInit {
  private id:string;
  public description={};
  public subscription:Subscription;
  private one;

  constructor(private activatedroute:ActivatedRoute, private dbservice:DbService) {
         
      this.subscription=this.activatedroute.params.subscribe(param=>{  
              this.id=param['id'];
      
               let arrdata= this.dbservice.getData();

               for(let x of arrdata){
                 if(x['id']==this.id){
                   this.description=x;
                   break;
                 }
               }

     });  
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
