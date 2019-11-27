import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
import { ContinentService } from 'src/app/continent/continent.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries:Country[];

  constructor(private countryService:CountryService,private continentService:ContinentService,private router:Router) { }

  ngOnInit() {
    this.countries=[];
    this.continentService.getSelectedContinent.subscribe(e=>{
      console.log(e)
      this.countryService.getCountriesByContinent(e).subscribe(e=>
        this.countries=e)
    }
    )};

}
