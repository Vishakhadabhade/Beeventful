import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Decorators } from '../class/decorators';

@Injectable({
  providedIn: 'root'
})
export class DecoratorsService {

  private baseURL = "http://localhost:8080/decorators";

  constructor(private httpclient : HttpClient) { }

  getDecoratorsList() : Observable<Decorators[]>{
    return this.httpclient.get<Decorators[]>(`${this.baseURL}`);
  }

  createDecorator(decorators : Decorators):Observable<object>{
    return this.httpclient.post<Decorators>(`${this.baseURL}` , decorators);
  }

  getDecoratorById(id : number): Observable<Decorators>{
    return this.httpclient.get<Decorators>(`${this.baseURL}/${id}`);
  }

  updateDecorator(id : number , decorators : Decorators): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,decorators);
  }

  deleteDecorator(id : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
}