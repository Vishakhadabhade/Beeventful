import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit{
  users : Users = new Users();
  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-regular fa-eye-slash";
  msg = '';
 
    constructor(private registerService :RegisterService , private router : Router){ }
  
    ngOnInit(): void {
      
    }
   
    saveUsers(){
      this.registerService.createUser(this.users).subscribe(data =>{
        console.log(data);
        this.gotoUsersList();
      },
      error => console.log(error));
    }
  
    gotoUsersList(){
      this.router.navigate(['/users']);
    }
    registerUser(){
      console.log(this.users);
      this.saveUsers();
    }

    hideShowPass(){
      this.isText = !this.isText;
      this.isText ? this.eyeIcon = "fa-regular fa-eye"  : this.eyeIcon = "fa-regular fa-eye-slash";
      this.isText ? this.type = "text" : this.type = "password";
   }
  }
  



