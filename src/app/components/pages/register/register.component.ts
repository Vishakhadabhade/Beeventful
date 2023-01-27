import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  users:Users = new Users(); 
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "bi-regular bi-eye-slash";
  msg = '';

 constructor(private registerService : RegisterService , private router : Router){}

 ngOnInit(): void {
   
 }

  registerUser(){
    this.registerService.SignUpUser(this.users).subscribe(
      data =>{
        console.log("response received");
        this.msg="Registrations Successful";
        this.router.navigate(['userdashboard']);
      },
      error =>{
        console.log("exception occured");
        this.msg=error.error;
      }
      
    )
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bi-regular bi-eye"  : this.eyeIcon = "bi-regular bi-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
 }

}
