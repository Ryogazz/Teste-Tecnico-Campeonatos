import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';


@Injectable({
  providedIn: 'root'
})

export class ApiService {

  private BASE_URL = 'https://pokeapi.co/api/v2/pokemon';


  constructor(private http: HttpClient) { }


  getPokemons(pokemon: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.BASE_URL}/${pokemon}`);
  }

}
