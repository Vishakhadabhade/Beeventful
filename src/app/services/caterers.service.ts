import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Caterers } from '../class/caterers';

@Injectable({
  providedIn: 'root'
})
export class CaterersService {

  private baseURL = "http://localhost:8080/caterers";

  constructor(private httpclient : HttpClient) { }

  getCaterersList() : Observable<Caterers[]>{
    return this.httpclient.get<Caterers[]>(`${this.baseURL}`);
  }

  createCaterer(caterers : Caterers):Observable<object>{
    return this.httpclient.post<Caterers>(`${this.baseURL}` , caterers);
  }

  getCatererById(id : number): Observable<Caterers>{
    return this.httpclient.get<Caterers>(`${this.baseURL}/${id}`);
  }

  updateCaterer(id : number , caterer : Caterers): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,caterer);
  }

  deleteCaterer(id : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }

}
