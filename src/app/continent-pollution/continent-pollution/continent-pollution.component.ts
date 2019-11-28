import { Component, OnInit } from '@angular/core';
import { Continent } from 'src/app/continent/models/continent.model';
import { ContinentService } from 'src/app/continent/continent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent-pollution',
  templateUrl: './continent-pollution.component.html',
  styleUrls: ['./continent-pollution.component.css']
})
export class ContinentPollutionComponent implements OnInit {

  continent: Continent;

  constructor(private continentService:ContinentService,private router:Router) { }

  ngOnInit() {
    this.continentService.getSelectedContinent.subscribe(e=>{
      console.log(e)
      this.continentService.getContinent(e).subscribe(result => {
        this.continent = result;
      });
    });
  };

}
