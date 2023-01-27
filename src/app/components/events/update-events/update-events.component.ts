import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from 'src/app/class/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css']
})
export class UpdateEventsComponent implements OnInit {

  id : number;
  events : Events = new Events();


  constructor(private eventsService : EventsService , private route : ActivatedRoute ,
    private router : Router){ }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params['id'];
    this.eventsService.getEventById(this.id).subscribe(data =>{
      this.events = data;
    },error =>console.log(error));
  }
onSubmit() {
  this.eventsService.updateEvent(this.id , this.events).subscribe( data =>{
    this.gotoEventsList();
  },
  error => console.log(error)); 
}
gotoEventsList(){
  this.router.navigate(['/events']);
}

}


