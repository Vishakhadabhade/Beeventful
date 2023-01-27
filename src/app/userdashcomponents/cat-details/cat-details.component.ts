import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Caterers } from 'src/app/class/caterers';
import { CaterersService } from 'src/app/services/caterers.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  id : number
  caterer : Caterers
  constructor(private route : ActivatedRoute , private caterersService : CaterersService){}
  
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.caterer = new Caterers();
   this.caterersService.getCatererById(this.id).subscribe(data => {
    this.caterer = data;
   });

 }
}
