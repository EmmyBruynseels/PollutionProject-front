import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CountryComponent]
})
export class CountryModule { }
