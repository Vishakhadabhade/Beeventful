import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/class/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  id : number
  events : Events
  constructor(private route : ActivatedRoute , private eventsService : EventsService){}
  
  ngOnInit(): void {
   this.id = this.route.snapshot.params['id'];
   this.events = new Events();
   this.eventsService.getEventById(this.id).subscribe(data => {
    this.events = data;
   });

 }
}
