import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { InfoApiRM } from '../common/rminterface';
@Injectable({
  providedIn: 'root',
})
export class RickMorty {
  private URI: string = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<InfoApiRM> {
    return this.http.get<InfoApiRM>(`${this.URI}?page=${page}`);
    
  }
}
