import { Injectable } from '@angular/core';
import { Films } from "../models/Films";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films : Films
  constructor(private http: HttpClient) { }

  Url='http://localhost:8081/api';

  getAllFilms(){
    console.log('estoy en getfilms');
     return this.http.get<Films[]>(this.Url+"/getFilms");
  }
  getFilmId(id:number){
    return this.http.get<Films>(this.Url+"/"+id);
  }
}
