import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BottleService {

  constructor(private http: HttpClient) { }
  fetch() {
    return this.http.get("https://api.punkapi.com/v2/beers")
  };
  getAPIbyOne(id: any) {
    return this.http.get("https://api.punkapi.com/v2/beers/"+id)
  }
}
