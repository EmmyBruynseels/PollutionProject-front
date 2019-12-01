import { Component, OnInit } from '@angular/core';
import { Continent } from 'src/app/continent/models/continent.model';
import { ContinentService } from 'src/app/continent/continent.service';
import { Router } from '@angular/router';
import { ContinentPollution } from '../models/continent-pollution.model';
import { ContinentPollutionService } from '../continent-pollution.service';
import { FormBuilder } from '@angular/forms';
import { CountryPollution } from 'src/app/country-pollution/models/country-pollution.model';

@Component({
  selector: 'app-continent-pollution',
  templateUrl: './continent-pollution.component.html',
  styleUrls: ['./continent-pollution.component.css']
})
export class ContinentPollutionComponent implements OnInit {

  continent: Continent;
  continentPollution:ContinentPollution;

  editPollution=this.fb.group({
    pollution:[''],
    year:['']
  });

  constructor(private fb: FormBuilder,private cPollutionService:ContinentPollutionService, private continentService:ContinentService,private router:Router) { 
    this.continentService.getSelectedContinent.subscribe((res:any)=>{
      this.cPollutionService.getContinentWithPollution(res).subscribe((res:any)=>{
        this.continent=res;
      });
    });
  }

  ngOnInit() {
    this.continent = new Continent(null,"",[]);
  };

  btnEdit(pollution:ContinentPollution){
    this.continentPollution=pollution;
    this.editPollution.controls.pollution.setValue(this.continentPollution.pollution);
    this.editPollution.controls.year.setValue(this.continentPollution.year);
  }

  btnDelete(id:Number){

    //stuur id naar service

  }

  btnSave(){
    this.continentPollution.year = this.editPollution.controls.year.value;
    this.continentPollution.pollution = this.editPollution.controls.pollution.value;
    console.log(this.continentPollution.year);
    //save in service nog

  }

}
