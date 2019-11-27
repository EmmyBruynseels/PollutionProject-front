import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContinentPollutionService {

  constructor(private http:HttpClient) { }
}
