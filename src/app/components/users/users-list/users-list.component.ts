import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
 
  users : Users[];
  
   constructor(private registerservice : RegisterService , private router : Router){}
 
   ngOnInit(): void {
     this.getUsers();
     
   }
   
   
   gotoRegistry(){
     this.router.navigate(['/dashboard']);
   }
   
 
   addUser(){
     this.router.navigate(['create-user']);
   }
     private getUsers(){
       this.registerservice.getUsersList().subscribe(data=> {
         this.users = data;
       });
     }
     UserDetails(id : number){
       this.router.navigate(['user-details' , id]);
     }
     updateUser(id:number){
       this.router.navigate(['update-user' , id]);
     }
   
     deleteUser(id : number){
       this.registerservice.deleteUser(id).subscribe(data =>{
         console.log(data);
         this.getUsers();
       })
     }
 }
