import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChordsService {
  apiUrl = 'https://localhost:7040/chords';  

  constructor(private http: HttpClient) { }

  getChords() {
    return this.http.get<string[]>(this.apiUrl);
  }
}