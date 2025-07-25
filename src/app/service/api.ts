import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private urlApi= 'http://localhost:8000/api/articulos'; //'https://rickandmortyapi.com/api/character/1,740'; //Pegar url de la api
  constructor( private http: HttpClient) { } 

  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
}
