import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryComponent } from './country/country.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';



@NgModule({
  declarations: [CountryComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports:[CountryComponent]
})
export class CountryModule { }
