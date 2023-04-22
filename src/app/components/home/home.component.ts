import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   pokemons: Pokemon[] = [];


   constructor(private apiService: ApiService) { }

   ngOnInit(): void {
    for (let i = 0; i <= 151; i++) {
      this.apiService.getPokemons(i).subscribe((data: Pokemon[]) => {
        this.pokemons = this.pokemons.concat(data);
        console.log(this.pokemons);
      });
   }
  }

}
