import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContinentModule } from './continent/continent.module';
import { CountryModule } from './country/country.module';
import { ContinentPollutionModule } from './continent-pollution/continent-pollution.module';
import { CountryPollutionModule } from './country-pollution/country-pollution.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContinentModule,
    CountryModule,
    ContinentPollutionModule,
    CountryPollutionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
