import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Decorators } from 'src/app/class/decorators';
import { DecoratorsService } from 'src/app/services/decorators.service';

@Component({
  selector: 'app-update-decorators',
  templateUrl: './update-decorators.component.html',
  styleUrls: ['./update-decorators.component.css']
})
export class UpdateDecoratorsComponent implements OnInit {

  id : number;
  decorators : Decorators = new Decorators();


  constructor(private decoratorService : DecoratorsService , private route : ActivatedRoute ,
    private router : Router){ }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.decoratorService.getDecoratorById(this.id).subscribe(data =>{
      this.decorators = data;
    },error =>console.log(error));
  }
onSubmit() {
  this.decoratorService.updateDecorator(this.id , this.decorators).subscribe( data =>{
    this.gotoDecoratorsList();
  },
  error => console.log(error)); 
}
gotoDecoratorsList(){
  this.router.navigate(['/decorators']);
}

}

