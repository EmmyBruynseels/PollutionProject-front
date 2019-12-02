import { Component, OnInit } from '@angular/core';
import { ContinentService } from '../continent.service';
import { Continent } from '../models/continent.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-continent',
  templateUrl: './continent.component.html',
  styleUrls: ['./continent.component.css']
})
export class ContinentComponent implements OnInit {

  continents:Continent[];

  constructor(private continentService : ContinentService,private router:Router) { }

  ngOnInit() {
    this.continents=[];
    this.continentService.getAllContinents().subscribe(
      (res:any)=>{
        this.continents=res;
        console.log(this.continents);
      })
  }
  displayedColumns: string[] = ['Name', 'Pollution','Countries'];

  btnPollution(id:number){
    this.continentService.getSelectedContinent.next(id);
    this.router.navigate(["/continentPollution"]);
  }

  btnCountries(id:number){
    this.continentService.getSelectedContinent.next(id);
    this.router.navigate(["/countries"]);
  }

}
