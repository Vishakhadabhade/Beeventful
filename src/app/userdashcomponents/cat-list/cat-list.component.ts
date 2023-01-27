import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterers } from 'src/app/class/caterers';
import { CaterersService } from 'src/app/services/caterers.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  caterers : Caterers[];

  constructor(private caterersService : CaterersService , private router : Router){ }

  ngOnInit() : void{
    this.getCaterers();
  }

  gotoRegistry(){
    this.router.navigate(['/userdashboard']);
  }

  private getCaterers(){
    this.caterersService.getCaterersList().subscribe(data=> {
      this.caterers = data;
    });
  }
  CatererDetails(id : number){
    this.router.navigate(['caterer-details' , id]);
  }

}
