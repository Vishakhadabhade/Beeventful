import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locations } from '../class/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private baseURL = "http://localhost:8080/locations";
  constructor(private httpclient : HttpClient) { }

  getLocationsList() : Observable<Locations[]>{
    return this.httpclient.get<Locations[]>(`${this.baseURL}`);
  }

  createLocation(locations : Locations):Observable<object>{
    return this.httpclient.post<Locations>(`${this.baseURL}` , locations);
  }

  getLocationById(id : number): Observable<Locations>{
    return this.httpclient.get<Locations>(`${this.baseURL}/${id}`);
  }

  updateLocation(id : number , locations : Locations): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,locations);
  }

  deleteLocation(id : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}
