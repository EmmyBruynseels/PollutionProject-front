import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country/models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryPollutionService {

  constructor(private http:HttpClient) {

   }

   getCountryWithPollution(id:number){
      return this.http.get<Country>("http://localhost:8050/listings/countryPollution/"+id);
  }
}
