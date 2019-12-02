import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/country/models/country.model';
import { CountryPollutionService } from '../country-pollution.service';
import { CountryService } from 'src/app/country/country.service';
import { Router } from '@angular/router';
import { CountryPollution } from '../models/country-pollution.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-country-pollution',
  templateUrl: './country-pollution.component.html',
  styleUrls: ['./country-pollution.component.css']
})
export class CountryPollutionComponent implements OnInit {

  country: Country;
  countryPollution:CountryPollution;

  editPollution=this.fb.group({
    pollution:[''],
    year:['']
  });

  constructor(private fb: FormBuilder,private cPollutionService:CountryPollutionService,private countryService: CountryService,private router:Router) { 
    this.countryService.getSelectedCountry.subscribe((res:any)=>{
      this.cPollutionService.getCountryWithPollution(res).subscribe((res:any)=>{
        this.country=res;
      })
    })
  }

  ngOnInit() {
    this.country= new Country(null,"",null,"",0,0,0,0,0,0,[]);
  }

  btnEdit(pollution:CountryPollution){
    this.countryPollution=pollution;
    this.editPollution.controls.pollution.setValue(this.countryPollution.pollution);
    this.editPollution.controls.year.setValue(this.countryPollution.year);
  }

  btnDelete(){
    //delete in service
    this.cPollutionService.deleteCountryPollution(this.countryPollution.id).subscribe(result =>{
      console.log("deleted in microservice");
    });
  }

  btnSave(){
    this.countryPollution.year = this.editPollution.controls.year.value;
    this.countryPollution.pollution = this.editPollution.controls.pollution.value;
    console.log(this.countryPollution.year);
    //save in service
    this.cPollutionService.updateCountryPollution(this.countryPollution).subscribe(result =>{
      console.log("saved in microservice");
    });
  }

}
