import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locations } from 'src/app/class/locations';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-update-locations',
  templateUrl: './update-locations.component.html',
  styleUrls: ['./update-locations.component.css']
})
export class UpdateLocationsComponent implements OnInit {

  id : number;
  locations : Locations = new Locations();


  constructor(private locationsService : LocationsService , private route : ActivatedRoute ,
    private router : Router){ }

  ngOnInit(){
    this.id =  this.route.snapshot.params['id'];
    this.locationsService.getLocationById(this.id).subscribe(data =>{
      this.locations = data;
    },error =>console.log(error));
  }
onSubmit() {
  this.locationsService.updateLocation(this.id , this.locations).subscribe( data =>{
    this.gotoLocationsList();
  },
  error => console.log(error)); 
}
gotoLocationsList(){
  this.router.navigate(['/locations']);
}

}


