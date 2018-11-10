import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class ReguserService {

  constructor(private http:Http) { 

  }

  regUser(userDetails){
    return this.http.post("http://localhost:9988/api/register",userDetails);
  }
}
