import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Continent } from './models/continent.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {

  selectedContinent:number;

  getSelectedContinent = new BehaviorSubject(this.selectedContinent);

  constructor(private http:HttpClient) { }

  getAllContinents():Observable<Continent[]>{
    return this.http.get<Continent[]>("http://localhost:8762/pollutionapi/listings/continents/");
  }

  getContinent(continentId: number):Observable<Continent>{
    return this.http.get<Continent>("http://localhost:8762/pollutionapi/listings/continentById/"+ continentId);
  }

}
