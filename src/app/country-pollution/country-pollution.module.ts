import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPollutionComponent } from './country-pollution/country-pollution.component';



@NgModule({
  declarations: [CountryPollutionComponent],
  imports: [
    CommonModule
  ],
  exports:[CountryPollutionComponent]
})
export class CountryPollutionModule { }
