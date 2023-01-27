import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorators } from 'src/app/class/decorators';
import { DecoratorsService } from 'src/app/services/decorators.service';

@Component({
  selector: 'app-dec-list',
  templateUrl: './dec-list.component.html',
  styleUrls: ['./dec-list.component.css']
})
export class DecListComponent implements OnInit {
  decorators : Decorators[];
  
  constructor(private decoratorservice : DecoratorsService , private router : Router){}
  
  ngOnInit() :void{
    this.getDecorators();
  }
  
  
  gotoRegistry(){
    this.router.navigate(['userdashboard']);
  }

  private getDecorators(){
    this.decoratorservice.getDecoratorsList().subscribe(data=> {
      this.decorators = data;
    });
  }
  DecoratorDetails(id : number){
    this.router.navigate(['decorator-details' , id]);
  }

}
