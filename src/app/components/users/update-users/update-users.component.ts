import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {

  id : number;
  users:Users = new Users(); 
 type : string = "password";
 isText : boolean = false;
 eyeIcon : string = "fa-regular fa-eye-slash";
 msg = '';


  constructor(private registerService : RegisterService , private route : ActivatedRoute ,
    private router : Router){ }

  ngOnInit(){
    this.id =  this.route.snapshot.params['id'];
    this.registerService.getUserById(this.id).subscribe(data =>{
      this.users = data;
    },error =>console.log(error));
  }
onSubmit() {
  this.registerService.updateUsers(this.id , this.users).subscribe( data =>{
    this.gotoUsersList();
  },
  error => console.log(error)); 
}
gotoUsersList(){
  this.router.navigate(['/users']);
}

hideShowPass(){
  this.isText = !this.isText;
  this.isText ? this.eyeIcon = "fa-regular fa-eye"  : this.eyeIcon = "fa-regular fa-eye-slash";
  this.isText ? this.type = "text" : this.type = "password";
}

}