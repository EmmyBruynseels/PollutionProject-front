import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ContinentModule } from './continent/continent.module';
import { CountryModule } from './country/country.module';
import { ContinentPollutionModule } from './continent-pollution/continent-pollution.module';
import { CountryPollutionModule } from './country-pollution/country-pollution.module';
import { AppRoutingModule } from './app-routing.module';
import { ContinentComponent } from './continent/continent/continent.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContinentModule,
    CountryModule,
    ContinentPollutionModule,
    CountryPollutionModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],exports:[AppComponent]
})
export class AppModule { }
