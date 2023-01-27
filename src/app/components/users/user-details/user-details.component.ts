import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/class/users';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id : number
  users : Users
  constructor(private route : ActivatedRoute , private registerService : RegisterService){}
  
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.users = new Users();
   this.registerService.getUserById(this.id).subscribe(data => {
    this.users = data;
   });

 }
}
