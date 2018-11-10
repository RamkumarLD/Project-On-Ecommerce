import { Component, OnInit } from '@angular/core';

import {ReguserService} from '../reguser.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent {
// Password: string;
// confirmpassword: string;
 
    userInfo(form){
    alert(JSON.stringify(form.value))
    // if(this.Password != this.confirmpassword )
    // {
    //   alert("password mismatch");

    // }
    // else{
    //   alert("password match");
    //   console.log(this.Password);

    // }
  }


  regResponse;
  message;
  firstname;
  lastname;
  email;
  mobilenumber;
  dob;
  password;
  confirm_password;

  constructor(private registerService:ReguserService, private router:Router) { }

  registerUser(form){

    var userDetails={
         firstname:form.firstname,
         lastname:form.lastname,
         email:form.email,
         mobilenumber:form.mobilenumber,
         dob:form.dob,
         password:form.password,
         confirm_password:form.confirm_password
    }
        console.log(userDetails);
    this.registerService.regUser(userDetails).subscribe(

       (response) =>{
            this.regResponse=response.json();
          
           if(this.regResponse.status){
               this.router.navigate(['/log-user']);
           }
           else
           {
                this.message= this.regResponse.message;
           }
       }

    );

    
 }


}


