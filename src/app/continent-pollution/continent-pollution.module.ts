import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentPollutionComponent } from './continent-pollution/continent-pollution.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ContinentPollutionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule
  ],
  exports:[ContinentPollutionComponent]
})
export class ContinentPollutionModule { }
