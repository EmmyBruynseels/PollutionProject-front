import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContinentPollution } from './models/continent-pollution.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContinentPollutionService {

  constructor(private http:HttpClient) { }

  getContinentWithPollution(id:Number):Observable<ContinentPollution>{
    return this.http.get<ContinentPollution>("http://localhost:8050/listings/continentPollution/"+id);
  }
}
