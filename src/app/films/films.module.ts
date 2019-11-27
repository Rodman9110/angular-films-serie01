import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card'
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  declarations: [FilmsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule
    
  ],
  exports:[
    HttpClientModule
  ]
})
export class FilmsModule { }
