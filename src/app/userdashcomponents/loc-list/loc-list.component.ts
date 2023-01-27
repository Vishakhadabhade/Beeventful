import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-loc-list',
  templateUrl: './loc-list.component.html',
  styleUrls: ['./loc-list.component.css']
})
export class LocListComponent implements OnInit {
  locations : Locations[];

  constructor(private locationsService : LocationsService , private router : Router){ }

  ngOnInit() : void{
    this.getLocations();
  }

  gotoRegistry(){
    this.router.navigate(['/admindashboard']);
  }
  
    private getLocations(){
      this.locationsService.getLocationsList().subscribe(data=> {
        this.locations = data;
      });
    }
    LocationDetails(id : number){
      this.router.navigate(['location-detail' , id]);
    }

}
