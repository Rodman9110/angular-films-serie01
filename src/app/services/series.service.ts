import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Series } from '../models/Series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
 
  series: Series;
  constructor(private http: HttpClient) { }

  Url='http://localhost:8081/api';

  GetAllSeries(){
    console.log('estoy en series');
    return this.http.get<Series[]>(this.Url+"/getSeries");
  }
}
