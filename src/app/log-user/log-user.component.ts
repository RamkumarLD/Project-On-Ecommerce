import { Component, OnInit } from '@angular/core';

import {LoguserService} from '../loguser.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-log-user',
  templateUrl: './log-user.component.html',
  styleUrls: ['./log-user.component.css']
})
export class LogUserComponent {

  regResponse;
  message;
  email;
  password;


  constructor(private loginService:LoguserService, private router:Router) { }

  loginUser(form){

    var userDetails={
       
         email:form.email,
         password:form.password
    }

    this.loginService.loginUser(userDetails).subscribe(

       (response) =>{
            this.regResponse=response.json();
            console.log(this.regResponse);
          
           if(this.regResponse.status){
               this.router.navigate(['/home']);
           }
           else
           {
                this.message= this.regResponse.message;
           }
       }

    );

    
 }
  

}


