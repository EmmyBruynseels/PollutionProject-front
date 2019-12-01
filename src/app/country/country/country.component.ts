import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
import { ContinentService } from 'src/app/continent/continent.service';
import { Continent } from 'src/app/continent/models/continent.model';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries:Country[];
  continent:Continent;

  constructor(private countryService:CountryService,private continentService:ContinentService,private router:Router) { }

  ngOnInit() {
    this.countries=[];
    this.continent=new Continent(null,"",[]);
    this.continentService.getSelectedContinent.subscribe(e=>{
      console.log(e)
      this.continentService.getContinent(e).subscribe(result => {
        this.continent = result;
      });
      this.countryService.getCountriesByContinent(e).subscribe(e=>
        this.countries=e)
    })
  };

  btnPollution(id:number){
    this.countryService.getSelectedCountry.next(id);
    this.router.navigate(["/countryPollution"]);
  }

}
