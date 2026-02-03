import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharactersFS } from '../common/fsinterface';


@Injectable({
  providedIn: 'root',
})
export class FinalSpace {
  private URI: string = ' https://finalspaceapi.com/api/v0/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<CharactersFS[]> {
    return this.http.get<CharactersFS[]>(`${this.URI}`);
    
  }
}
