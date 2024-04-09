import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterServiceService {

  private url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=df423de57fbb53e895eef8ab605ff531';

  constructor(private http: HttpClient) { }

  public getPersonajes(): Observable<any> {
    return this.http.get<any>(this.url)
  }
}

