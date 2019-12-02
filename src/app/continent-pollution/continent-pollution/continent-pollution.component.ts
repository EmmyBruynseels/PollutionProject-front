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

  createPollution=this.fb.group({
    pollution:[''],
    year:['']
  });

  constructor(private fb: FormBuilder,private cPollutionService:ContinentPollutionService, private continentService:ContinentService,private router:Router) { 
  }

  ngOnInit() {
    this.continent = new Continent(null,"",[]);
    this.continentService.getSelectedContinent.subscribe((res:any)=>{
      this.cPollutionService.getContinentWithPollution(res).subscribe((res:any)=>{
        this.continent=res;
      });
    });
  };
  displayedColumns: string[] = ['Year', 'Pollution','Edit'];
  btnEdit(pollution:ContinentPollution){
    this.continentPollution=pollution;
    this.editPollution.controls.pollution.setValue(this.continentPollution.pollution);
    this.editPollution.controls.year.setValue(this.continentPollution.year);
  }

  btnDelete(){
    this.continentService.getSelectedContinent.next(this.continent.continentId);
    this.cPollutionService.deleteContinentPollution(this.continentPollution.id).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }

  btnSave(){
    this.continentPollution.year = this.editPollution.controls.year.value;
    this.continentPollution.pollution = this.editPollution.controls.pollution.value;
    this.cPollutionService.updateContinentPollution(this.continentPollution).subscribe();
  }

  btnCreate(){
    this.continentPollution = new ContinentPollution(0,0,0,0);
    this.continentPollution.year = this.createPollution.controls.year.value;
    this.continentPollution.pollution = this.createPollution.controls.pollution.value;
    this.continentPollution.continentID=this.continent.continentId;

    this.continentService.getSelectedContinent.next(this.continent.continentId);
    this.cPollutionService.addContinentPollution(this.continentPollution).subscribe((res:any)=>{
      this.ngOnInit();
    });
  }

}
