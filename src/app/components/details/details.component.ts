import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { SharedPokemonService } from '../../services/shared-pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id?: number;
  pokemons?: Pokemon[] = [];
  pokemon?: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private sharedPokemonService: SharedPokemonService
    ) {}


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.sharedPokemonService.loadPokemons();
    this.sharedPokemonService.getPokemons().subscribe((data: Pokemon[]) => {
    this.pokemons = data;
    this.pokemon = this.pokemons.find((pokemon) => pokemon.id == this.id);
    });
  }

}
