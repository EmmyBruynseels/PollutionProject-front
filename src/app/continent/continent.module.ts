import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContinentComponent } from './continent/continent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContinentComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[ContinentComponent]
})
export class ContinentModule { }
