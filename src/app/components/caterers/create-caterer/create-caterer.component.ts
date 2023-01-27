import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Caterers } from 'src/app/class/caterers';
import { CaterersService } from 'src/app/services/caterers.service';

@Component({
  selector: 'app-create-caterer',
  templateUrl: './create-caterer.component.html',
  styleUrls: ['./create-caterer.component.css']
})
export class CreateCatererComponent implements OnInit{
  caterers : Caterers = new Caterers();
    constructor(private caterersService : CaterersService , private router : Router){ }
  
    ngOnInit(): void {
      
    }
   
    saveCaterer(){
      this.caterersService.createCaterer(this.caterers).subscribe(data =>{
        console.log(data);
        this.gotoCaterersList();
      },
      error => console.log(error));
    }
  
    gotoCaterersList(){
      this.router.navigate(['/caterers']);
    }
    onSubmit(){
      console.log(this.caterers);
      this.saveCaterer();
    }
  }
  
