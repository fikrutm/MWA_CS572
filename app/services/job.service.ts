
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { AuthService } from "./auth.service";

@Injectable()
export class JobService {

  constructor(private _http:Http,private _auth:AuthService) {

   }
}