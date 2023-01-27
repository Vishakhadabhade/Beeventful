import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  constructor(private router : Router){}

  ngOnInit(): void {
    
  }
gotoCaterersList(){
  this.router.navigate(['cat-list']);
}

gotoDecoratorsList(){
  this.router.navigate(['dec-list']);
}

gotoLocationsList(){
  this.router.navigate(['loc-list']);
}
}
