import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../services/films.service';
import { Films } from '../models/Films';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films:Films[];
  film:Films;
  constructor(private filmsService: FilmsService) { }

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
}
