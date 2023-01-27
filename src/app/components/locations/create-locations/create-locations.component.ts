import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-create-locations',
  templateUrl: './create-locations.component.html',
  styleUrls: ['./create-locations.component.css']
})
export class CreateLocationsComponent implements OnInit{
  locations : Locations = new Locations();
    constructor(private locationsService : LocationsService , private router : Router){ }
  
    ngOnInit(): void {
      
    }
   
    saveLocation(){
      this.locationsService.createLocation(this.locations).subscribe(data =>{
        console.log(data);
        this.gotoLocationsList();
      },
      error => console.log(error));
    }
  
    gotoLocationsList(){
      this.router.navigate(['/locations']);
    }
    onSubmit(){
      console.log(this.locations);
      this.saveLocation();
    }
  }
  


