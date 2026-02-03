import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { VLinterface } from '../common/vlinterface';
@Injectable({
  providedIn: 'root',
})
export class SerValorant {
  private URI: string = 'https://valorant-api.com/v1/agents';

  constructor(private http: HttpClient) {}

  getCharacters(page: number = 1): Observable<VLinterface> {
    return this.http.get<VLinterface>(`${this.URI}`);
    
  }
}
