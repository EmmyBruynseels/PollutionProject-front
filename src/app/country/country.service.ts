import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from './models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  selectedCountry:number;

  getSelectedCountry = new BehaviorSubject(this.selectedCountry);


  constructor(private http:HttpClient) { }

  getCountriesByContinent(id:number):Observable<Country[]>{
    return this.http.get<Country[]>("http://localhost:8762/pollutionapi/listings/countryByContinent/"+id)
  }

  updateCountry(country: Country){
    return this.http.put<Country>("http://localhost:8762/pollutionapi/listings/country/", country);
  }
}
