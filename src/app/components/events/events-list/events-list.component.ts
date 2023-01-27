import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from 'src/app/class/events';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit{

  constructor(private eventservice : EventsService , private router : Router){}
  events : Events[];

  ngOnInit() : void{
    this.getEvents();
  }

  
  gotoRegistry(){
    this.router.navigate(['/admindashboard']);
  }
  

  addEvent(){
    this.router.navigate(['create-event']);
  }
    private getEvents(){
      this.eventservice.getEventsList().subscribe(data=> {
        this.events = data;
      });
    }
    EventDetails(id : number){
      this.router.navigate(['event-details' , id]);
    }
    updateEvent(id:number){
      this.router.navigate(['update-event' , id]);
    }
  
    deleteEvent(id : number){
      this.eventservice.deleteEvent(id).subscribe(data =>{
        console.log(data);
        this.getEvents();
      })
    }

}
