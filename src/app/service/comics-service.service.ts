import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComicsServiceService {

  private url = "https://gateway.marvel.com:443/v1/public/comics?apikey=df423de57fbb53e895eef8ab605ff531"
  constructor(private http: HttpClient) { }

  public callComics(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
