import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../country/models/country.model';
import { CountryPollution } from './models/country-pollution.model';

@Injectable({
  providedIn: 'root'
})
export class CountryPollutionService {

  constructor(private http:HttpClient) {
  }

  getCountryWithPollution(id:number){
    return this.http.get<Country>("http://localhost:8762/pollutionapi/listings/countryPollution/"+id);
  }

  updateCountryPollution(countryPollution: CountryPollution){
    return this.http.put<CountryPollution>("http://localhost:8762/pollutionapi/listings/countryPollution/", countryPollution);
  }
}
