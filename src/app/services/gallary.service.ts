import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GallaryService {

  constructor() { }


  folder = [

    {
    id:1,
    img:"/assets/photos/arrange.jpg"
    },
    {
      id:2,
      img:"/assets/photos/concert.jpg"
    },
    {
      id:3,
      img:"/assets/photos/dec.jpg"
    },
    {
      id:4,
      img:"/assets/photos/heart.jpg"
    },
    {
      id:5,
      img:"/assets/photos/mandap.jpg"
    },
    {
      id:6,
      img:"/assets/photos/poolside.jpg"
    },
    {
      id:7,
      img:"/assets/photos/corporate.jpg"
    },
    
    {
      id:8,
      img:"/assets/photos/conc.jpg"
    },
    
  ]
}
