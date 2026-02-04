import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { DGBinterface } from '../common/dgbinterface'; 
@Injectable({
  providedIn: 'root',
})
export class SerDragonBall {
  private URI: string = 'https://dragonball-api.com/api/characters';
  
  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1,limit:number=10): Observable<DGBinterface> {
    return this.http.get<DGBinterface>(`${this.URI}?page=${page}&limit=${limit}`);
    
  }
}
