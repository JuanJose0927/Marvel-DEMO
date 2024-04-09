import { Component, OnInit } from '@angular/core';
import { SeriesServiceService } from '../service/series-service.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit{

  series: any[] = [];

  ngOnInit(): void {
    this.callSeries();
  }
  constructor(private serieService: SeriesServiceService){}

  callSeries(){
    this.serieService.getSeries().subscribe(data =>{
      this.series = data.data.results;
      console.log(this.series)
    })
  }
}
