import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{

  constructor(private router : Router){}

  ngOnInit(): void {
    
  }

  gotoCaterersList(){
    this.router.navigate(['caterers']);
  }

  addCaterer(){
    this.router.navigate(['create-caterer']);
  }

  gotoDecoratorsList(){
    this.router.navigate(['decorators']);
  }

  addDecorator(){
    this.router.navigate(['create-decorator']);
  }

  gotoLocationsList(){
    this.router.navigate(['locations']);
  }

  addLocation(){
    this.router.navigate(['create-location']);
  }

  gotoEventsList(){
    this.router.navigate(['events']);
  }

  addEvent(){
    this.router.navigate(['create-event']);
  }

  gotoUsersList(){
    this.router.navigate(['users']);
  }

  addUser(){
    this.router.navigate(['create-user']);
  }
}
