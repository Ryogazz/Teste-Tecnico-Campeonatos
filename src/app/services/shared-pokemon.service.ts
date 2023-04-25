import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon.interface';
import { ApiService } from 'src/app/services/api.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedPokemonService {

  pokemons: Pokemon[] = [];
  private subject = new Subject<Pokemon[]>();


  constructor(private apiService: ApiService) { }

  loadPokemons(): void {
    for (let i = 0; i <= 151; i++) {
      this.apiService.getPokemons(i).subscribe((data: Pokemon[]) => {
        this.pokemons = this.pokemons.concat(data);
        this.subject.next(this.pokemons);
      });
   }
  }

  getPokemons(): Observable<Pokemon[]> {
    return this.subject.asObservable();
  }

}
