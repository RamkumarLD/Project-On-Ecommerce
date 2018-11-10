import { Injectable } from '@angular/core';
import {Http} from '@angular/http'

@Injectable({
  providedIn: 'root'
})
export class LoguserService {

  constructor(private http:Http) { 

  }

  loginUser(userDetails){
    return this.http.post("http://localhost:9988/api/login",userDetails);
  }

}
