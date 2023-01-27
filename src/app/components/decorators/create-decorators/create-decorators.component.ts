import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Decorators } from 'src/app/class/decorators';
import { DecoratorsService } from 'src/app/services/decorators.service';

@Component({
  selector: 'app-create-decorators',
  templateUrl: './create-decorators.component.html',
  styleUrls: ['./create-decorators.component.css']
})
export class CreateDecoratorsComponent implements OnInit{
  decorators : Decorators = new Decorators();
    constructor(private decoratorsService : DecoratorsService , private router : Router){ }
  
    ngOnInit(): void {
      
    }
   
    saveDecorator(){
      this.decoratorsService.createDecorator(this.decorators).subscribe(data =>{
        console.log(data);
        this.gotoDecoratorsList();
      },
      error => console.log(error));
    }
  
    gotoDecoratorsList(){
      this.router.navigate(['/decorators']);
    }
    onSubmit(){
      console.log(this.decorators);
      this.saveDecorator();
    }
  }
  

