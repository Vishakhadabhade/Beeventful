import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

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
