import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorators } from 'src/app/class/decorators';
import { DecoratorsService } from 'src/app/services/decorators.service';

@Component({
  selector: 'app-decorators-list',
  templateUrl: './decorators-list.component.html',
  styleUrls: ['./decorators-list.component.css']
})
export class DecoratorsListComponent implements OnInit {
  decorators : Decorators[];
  
  constructor(private decoratorservice : DecoratorsService , private router : Router){}
  
  ngOnInit() :void{
    this.getDecorators();
  }
  
  
  gotoRegistry(){
    this.router.navigate(['admindashboard']);
  }
  
  addDecorator(){
    this.router.navigate(['create-decorator']);
  }
    private getDecorators(){
      this.decoratorservice.getDecoratorsList().subscribe(data=> {
        this.decorators = data;
      });
    }
    DecoratorDetails(id : number){
      this.router.navigate(['decorator-details' , id]);
    }
    updateDecorator(id:number){
      this.router.navigate(['update-decorator' , id]);
    }
  
    deleteDecorator(id : number){
      this.decoratorservice.deleteDecorator(id).subscribe(data =>{
        console.log(data);
        this.getDecorators();
      })
    }
  }
  
