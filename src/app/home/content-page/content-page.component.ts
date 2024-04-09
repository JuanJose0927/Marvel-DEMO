import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from 'src/app/service/homeservice.service';
@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.scss']
})
export class ContentPageComponent implements OnInit{

  creators: any[] = [];

  constructor(private creatorserive: HomeserviceService){}

  ngOnInit(): void {
    this.callCreator();
  }

  callCreator(){
    this.creatorserive.getCreator().subscribe((data =>{
      this.creators = data.data.results;
      console.log('data', data)
    }))
  }
}
