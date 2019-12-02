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

  createPollution=this.fb.group({
    pollution:[''],
    year:['']
  });

  constructor(private fb: FormBuilder,private cPollutionService:CountryPollutionService,private countryService: CountryService,private router:Router) { 
  }
  displayedColumns: string[] = ['Year', 'Pollution','Edit'];
  ngOnInit() {
    this.country= new Country(null,"",null,"",0,0,0,0,0,0,[]);
    this.countryService.getSelectedCountry.subscribe((res:any)=>{
      this.cPollutionService.getCountryWithPollution(res).subscribe((res:any)=>{
        this.country=res;
      })
    })
  }

  btnEdit(pollution:CountryPollution){
    this.countryPollution=pollution;
    this.editPollution.controls.pollution.setValue(this.countryPollution.pollution);
    this.editPollution.controls.year.setValue(this.countryPollution.year);
  }

  btnDelete(){
    this.countryService.getSelectedCountry.next(this.country.id);
    this.cPollutionService.deleteCountryPollution(this.countryPollution.id).subscribe(result =>{
      this.ngOnInit();
    });
  }

  btnSave(){
    this.countryPollution.year = this.editPollution.controls.year.value;
    this.countryPollution.pollution = this.editPollution.controls.pollution.value;
    this.cPollutionService.updateCountryPollution(this.countryPollution).subscribe();
  }

  
  btnCreate(){
    this.countryPollution = new CountryPollution(0,0,0,0);
    this.countryPollution.year = this.createPollution.controls.year.value;
    this.countryPollution.pollution = this.createPollution.controls.pollution.value;
    this.countryPollution.countryID=this.country.id;

    this.countryService.getSelectedCountry.next(this.country.id);
    this.cPollutionService.addCountryPollution(this.countryPollution).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }

}
