import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {
  id;
  film;
  constructor(private filmServices: FilmsService, private route: ActivatedRoute,) {
     
   // this.getFilm();
  }

  getFilm(){
  this.id = this.route.snapshot.params.id;
     this.filmServices.getFilmId(this.id).subscribe(
       date => this.film = date  
     )

  }

  ngOnInit() {
  }

}
