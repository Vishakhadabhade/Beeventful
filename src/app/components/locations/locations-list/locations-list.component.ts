import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent implements OnInit {
  locations : Locations[];

  constructor(private locationsService : LocationsService , private router : Router){ }

  ngOnInit() : void{
    this.getLocations();
  }
addCaterer(){
  this.router.navigate(['/create-location']);
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
  updateLocation(id:number){
    this.router.navigate(['update-location' , id]);
  }

  addLocation(){
    this.router.navigate(['create-location']);
  }

  deleteLocation(id : number){
    this.locationsService.deleteLocation(id).subscribe(data =>{
      console.log(data);
      this.getLocations();
    })
  }
}
