import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from '../class/events';

@Injectable({
  providedIn: 'root'
})
export class EventsService { 
  private baseURL = "http://localhost:8080/events";

constructor(private httpclient : HttpClient) { }

getEventsList() : Observable<Events[]>{
  return this.httpclient.get<Events[]>(`${this.baseURL}`);
}

createEvent(events : Events):Observable<object>{
  return this.httpclient.post<Events>(`${this.baseURL}` , events);
}

getEventById(id : number): Observable<Events>{
  return this.httpclient.get<Events>(`${this.baseURL}/${id}`);
}

updateEvent(id : number , events : Events): Observable<Object>{
  return this.httpclient.put(`${this.baseURL}/${id}`,events);
}

deleteEvent(id : number): Observable<Object>{
  return this.httpclient.delete(`${this.baseURL}/${id}`);
}
}
