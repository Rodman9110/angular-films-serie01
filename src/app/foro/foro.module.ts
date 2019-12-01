import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForoRoutingModule } from './foro-routing.module';
import { ForoComponent } from './foro.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [ForoComponent],
  imports: [
    CommonModule,
    ForoRoutingModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
    
  ]
})
export class ForoModule { }
