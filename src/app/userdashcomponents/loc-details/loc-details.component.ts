import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-loc-details',
  templateUrl: './loc-details.component.html',
  styleUrls: ['./loc-details.component.css']
})
export class LocDetailsComponent implements OnInit {

  id : number
  locations : Locations
  constructor(private route : ActivatedRoute , private locationsService : LocationsService){}
  
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.locations = new Locations();
   this.locationsService.getLocationById(this.id).subscribe(data => {
    this.locations = data;
   });

 }

}
