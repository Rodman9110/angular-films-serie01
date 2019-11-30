import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../services/series.service';
import { Series } from '../models/Series';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  series:Series[];
  constructor(private seriesServices: SeriesService) { }

  ngOnInit() {
    this.GetAllSeries();
  }

  GetAllSeries(){
   this.seriesServices.GetAllSeries()
    .subscribe(data =>{
      this.series = data;
      console.log(data);
     })

  }

}
