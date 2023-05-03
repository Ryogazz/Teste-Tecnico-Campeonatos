import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { Pokemon } from '../interfaces/pokemon.interface';

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of pokemons', () => {
    const mockedPokemonResponse: Pokemon = {
      name: 'Pikachu',
      id: 25,
      types: [
        {
          slot: 1,
          type: {
            name: 'electric',
            url: 'https://pokeapi.co/api/v2/type/13/'
          }
        }
      ],
      weight: 60,
      abilities: [
        {
          ability: {
            name: 'static',
            url: 'https://pokeapi.co/api/v2/ability/9/'
          },
          is_hidden: false,
          slot: 1
        }
      ],
      sprites: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/25.png',
        front_female: null,
        front_shiny_female: null,
        back_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png',
        back_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/25.png',
        back_female: null,
        back_shiny_female: null,
        other: {
          'official-artwork': {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
          }
        },
        versions: {
          'generation-v': {
            'black-white': {
              animated: {
                front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif'
              }
            }
          }
        }
      }
    };

    service.getPokemons(25).subscribe((pokemons: Pokemon[]) => {
      expect(pokemons.length).toBe(1);
      expect(pokemons[0]).toEqual(mockedPokemonResponse);
    });

    const req = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/25');
    expect(req.request.method).toBe('GET');
    req.flush([mockedPokemonResponse]);
  });
});
