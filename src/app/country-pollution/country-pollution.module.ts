import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryPollutionComponent } from './country-pollution/country-pollution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [CountryPollutionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule,
    MatTableModule
  ],
  exports:[CountryPollutionComponent]
})
export class CountryPollutionModule { }
