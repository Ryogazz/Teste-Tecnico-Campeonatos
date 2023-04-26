import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { SharedPokemonService } from 'src/app/services/shared-pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   pokemons: Pokemon[] = [];


  constructor(private sharedPokemonService: SharedPokemonService) { }

  ngOnInit(): void {
    this.sharedPokemonService.loadPokemons();
    this.sharedPokemonService.getPokemons().subscribe((data: Pokemon[]) => {
    this.pokemons = data.sort((a, b) => a.id - b.id);
  });
  }

}
