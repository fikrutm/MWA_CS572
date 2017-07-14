import { Component, OnInit } from '@angular/core';
import {DbService} from '../db.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  //  providers:[DbService]
 
})
export class StudentsComponent implements OnInit {
    public data:Object[]; 
   
  constructor(private db:DbService) {
   
  this.data=this.db.getData();
   }
   
  ngOnInit() {
  }

}
