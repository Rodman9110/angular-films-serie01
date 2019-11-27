import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FilmsComponent } from './films/films.component';


const routes: Routes = [
 
  {
    path: 'films',
    loadChildren: () =>
      import('./films/films.module').then(m => m.FilmsModule)
  },

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
