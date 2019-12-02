import { Component, OnInit } from '@angular/core';
import { Country } from '../models/country.model';
import { CountryService } from '../country.service';
import { Router } from '@angular/router';
import { ContinentService } from 'src/app/continent/continent.service';
import { Continent } from 'src/app/continent/models/continent.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  countries:Country[];
  continent:Continent;
  country:Country;

  editCountry=this.fb.group({
    name:[''],
    countryCode:[''],
    population:[''],
    area:[''],
    industry:[''],
    agriculture:[''],
    literacy:[''],
    populationDen:[''],
  });

  createCountry=this.fb.group({
    name:[''],
    countryCode:[''],
    population:[''],
    area:[''],
    industry:[''],
    agriculture:[''],
    literacy:[''],
    populationDen:[''],
  });

  constructor(private fb: FormBuilder,private countryService:CountryService,private continentService:ContinentService,private router:Router) { }

  ngOnInit() {
    this.countries=[];
    this.continent=new Continent(null,"",[]);
    this.continentService.getSelectedContinent.subscribe(e=>{
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

  btnEdit(country:Country){
    this.country=country;
    this.editCountry.controls.name.setValue(this.country.name);
    this.editCountry.controls.countryCode.setValue(this.country.countryCode);
    this.editCountry.controls.population.setValue(this.country.population);
    this.editCountry.controls.area.setValue(this.country.area);
    this.editCountry.controls.industry.setValue(this.country.industry);
    this.editCountry.controls.agriculture.setValue(this.country.agriculture);
    this.editCountry.controls.literacy.setValue(this.country.literacy);
    this.editCountry.controls.populationDen.setValue(this.country.popDensity);
  }

  btnSave(){
    this.country.name=this.editCountry.controls.name.value;
    this.country.countryCode=this.editCountry.controls.countryCode.value;
    this.country.population=this.editCountry.controls.population.value;
    this.country.area=this.editCountry.controls.area.value;
    this.country.industry=this.editCountry.controls.industry.value;
    this.country.agriculture=this.editCountry.controls.agriculture.value;
    this.country.literacy=this.editCountry.controls.literacy.value;
    this.country.popDensity=this.editCountry.controls.populationDen.value;
    this.countryService.updateCountry(this.country).subscribe();
  }

  btnDelete(){
    this.continentService.getSelectedContinent.next(this.continent.continentId);
    this.countryService.deleteCountry(this.country.id).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

  btnCreate(){
    this.country = new Country(0,"",this.continent.continentId,"",0,0,0,0,0,0,[]);
    this.country.name=this.createCountry.controls.name.value;
    this.country.countryCode=this.createCountry.controls.countryCode.value;
    this.country.population=this.createCountry.controls.population.value;
    this.country.area=this.createCountry.controls.area.value;
    this.country.industry=this.createCountry.controls.industry.value;
    this.country.agriculture=this.createCountry.controls.agriculture.value;
    this.country.literacy=this.createCountry.controls.literacy.value;
    this.country.popDensity=this.createCountry.controls.populationDen.value;

    this.continentService.getSelectedContinent.next(this.continent.continentId);
    this.countryService.addCountry(this.country).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

}
