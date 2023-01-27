import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Decorators } from 'src/app/class/decorators';
import { DecoratorsService } from 'src/app/services/decorators.service';

@Component({
  selector: 'app-decorator-details',
  templateUrl: './decorator-details.component.html',
  styleUrls: ['./decorator-details.component.css']
})
export class DecoratorDetailsComponent implements OnInit {

  id : number
  decorators : Decorators
  constructor(private route : ActivatedRoute , private decoratorsService : DecoratorsService){}
  
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.decorators = new Decorators();
   this.decoratorsService.getDecoratorById(this.id).subscribe(data => {
    this.decorators = data;
   });

 }
}