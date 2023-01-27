import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  users:Users = new Users(); 
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-regular fa-eye-slash";
  msg = '';
 
   constructor(private registerservice : RegisterService , private router : Router){}
 
  ngOnInit(): void {
    
  }
 log_in(){

  if(this.users.email=="vishakha12@gmail.com" && this.users.password=="vishakha12"){
    this.router.navigate(['admindashboard']);
  }
 
 this.registerservice.loginUser(this.users).subscribe(
   data=> {
     console.log(data);
     console.log("response received");
     this.router.navigate(['/userdashboard']);
  
   },
   error => console.log("error occured")
   )
 }
 
  hideShowPass(){
     this.isText = !this.isText;
     this.isText ? this.eyeIcon = "fa-regular fa-eye"  : this.eyeIcon = "fa-regular fa-eye-slash";
     this.isText ? this.type = "text" : this.type = "password";
  }
 }
 
