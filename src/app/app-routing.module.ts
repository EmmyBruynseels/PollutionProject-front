import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContinentComponent } from './continent/continent/continent.component';
import { ContinentPollutionComponent } from './continent-pollution/continent-pollution/continent-pollution.component';
import { CountryComponent } from './country/country/country.component';
import { CountryPollutionComponent } from './country-pollution/country-pollution/country-pollution.component';

//app routes
const routes: Routes = [
  {path: '', component: ContinentComponent,},
  {path: 'countries', component: CountryComponent,},
  {path: 'continentPollution', component: ContinentPollutionComponent},
  {path: 'countryPollution', component: CountryPollutionComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
