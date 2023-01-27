import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/class/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{
  events : Events = new Events();
    constructor(private eventsService : EventsService , private router : Router){ }
  
    ngOnInit(): void {
      
    }
   
    saveEvent(){
      this.eventsService.createEvent(this.events).subscribe(data =>{
        console.log(data);
        this.gotoEventsList();
      },
      error => console.log(error));
    }
  
    gotoEventsList(){
      this.router.navigate(['/events']);
    }
    onSubmit(){
      console.log(this.events);
      this.saveEvent();
    }
  }
  
