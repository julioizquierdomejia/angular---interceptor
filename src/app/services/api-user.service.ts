import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService implements OnInit {


  nombreDeApp = 'App de intercetpres';


  url = "https://jsonplaceholder.typicode.com/users";

  constructor( private http:HttpClient ) { }

  ngOnInit(): void {
   
  }

  getMostrar(){
    return this.http.get<any>(this.url);
  }

}
