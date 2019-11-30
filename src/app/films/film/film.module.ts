import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [FilmComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTabsModule,

    

    

  ]
})
export class FilmModule { }
