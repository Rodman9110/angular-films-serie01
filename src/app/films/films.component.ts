import { Component, OnInit, Input } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Films } from '../models/Films';
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:Films[];
  film:Films;
  @Input() items: any[] = [];
  constructor(private filmsService: FilmsService,private router: Router) {    }

  ngOnInit() {
     this.getAllFilms();
  }

  getAllFilms(){
   this.filmsService.getAllFilms()
      .subscribe(data=>{
      this.films=data; 
      console.log(data);     
    })
  }
  getFindId(){
    let id=localStorage.getItem("id");
    this.filmsService.getFilmId(+id)
    .subscribe(data =>{
        this.film=data;
      })
  }
  getFilm( item: any ){
    console.log(item);
    let filmId;
    if (item.type === 'film') {
      filmId = item.id;       
    } else {
      
    }
    this.router.navigate(['/film',filmId])
  }

}
