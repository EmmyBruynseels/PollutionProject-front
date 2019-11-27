import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentPollutionComponent } from './continent-pollution/continent-pollution.component';



@NgModule({
  declarations: [ContinentPollutionComponent],
  imports: [
    CommonModule
  ],
  exports:[ContinentPollutionComponent]
})
export class ContinentPollutionModule { }
