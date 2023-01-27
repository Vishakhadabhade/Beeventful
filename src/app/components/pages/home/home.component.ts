import { Component, OnInit } from '@angular/core';
import { GallaryService } from 'src/app/services/gallary.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(private gallaryservice : GallaryService){}

 picture : any;

  ngOnInit(): void {
    this.picture = this.gallaryservice.folder;
  }


}
