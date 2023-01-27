import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../class/users';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 
  private baseURL = "http://localhost:8080/users";
  constructor(private httpclient : HttpClient){}


   public loginUser(users : Users):Observable<any>{
    return this.httpclient.post("http://localhost:8080/login" , users)
   }

   public SignUpUser(users : Users):Observable<Users>{
    return this.httpclient.post<Users>(`${this.baseURL}`, users)
   }

   getUsersList() : Observable<Users[]>{
    return this.httpclient.get<Users[]>(`${this.baseURL}`);
  }

  createUser(users : Users):Observable<object>{
    return this.httpclient.post<Users>(`${this.baseURL}` , users);
  }

  getUserById(id : number): Observable<Users>{
    return this.httpclient.get<Users>(`${this.baseURL}/${id}`);
  }

  updateUsers(id : number , users : Users): Observable<Object>{
    return this.httpclient.put(`${this.baseURL}/${id}`,users);
  }

  deleteUser(id : number): Observable<Object>{
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
 }
