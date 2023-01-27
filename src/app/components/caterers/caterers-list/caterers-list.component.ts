import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterers } from 'src/app/class/caterers';
import { CaterersService } from 'src/app/services/caterers.service';

@Component({
  selector: 'app-caterers-list',
  templateUrl: './caterers-list.component.html',
  styleUrls: ['./caterers-list.component.css']
})
export class CaterersListComponent implements OnInit {
  caterers : Caterers[];

  constructor(private caterersService : CaterersService , private router : Router){ }

  ngOnInit() : void{
    this.getCaterers();
  }
addCaterer(){
  this.router.navigate(['/create-caterer']);
}

gotoRegistry(){
  this.router.navigate(['/admindashboard']);
}

  private getCaterers(){
    this.caterersService.getCaterersList().subscribe(data=> {
      this.caterers = data;
    });
  }
  CatererDetails(id : number){
    this.router.navigate(['caterer-details' , id]);
  }
  updateCaterer(id:number){
    this.router.navigate(['update-caterer' , id]);
  }

  deleteCaterer(id : number){
    this.caterersService.deleteCaterer(id).subscribe(data =>{
      console.log(data);
      this.getCaterers();
    })
  }
}

