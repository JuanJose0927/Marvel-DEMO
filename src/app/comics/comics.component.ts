import { Component, OnInit } from '@angular/core';
import { ComicsServiceService } from '../service/comics-service.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit{

  comics:any[] = []

  constructor(private comicService : ComicsServiceService){}
  ngOnInit(): void {
    this.getComics()
  }

  getComics(){
    this.comicService.callComics().subscribe(data =>{
      this.comics = data.data.results;
      console.log(data)
    })
  }
}
