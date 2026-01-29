import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Dsinterface } from '../common/dsinterface';

@Injectable({
  providedIn: 'root',
})
export class Disney {
  private URI: string = 'https://api.disneyapi.dev/character';
  
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1,pageSize:number=20, name:string=""): Observable<Dsinterface> {
    return this.http.get<Dsinterface>(`${this.URI}?page=${page}&pageSize=${pageSize}&name=${name}`);
    
  }
}
