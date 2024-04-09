import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  private url = 'https://gateway.marvel.com:443/v1/public/events?apikey=df423de57fbb53e895eef8ab605ff531';

  constructor(private http: HttpClient) { }

  public getCreator(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}
