import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { SharedPokemonService } from './shared-pokemon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SharedPokemonService', () => {
  let service: SharedPokemonService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    service = TestBed.inject(SharedPokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadPokemons()', () => {
    it('should load pokemons', () => {
      const pokemonData = {
        id: 1,
        name: 'bulbasaur',
        weight: 69,
        abilities: [],
        types: [],
        sprites: {
          versions: {
            'generation-v': {
              'black-white': {
                animated: {
                  front_default: 'https://example.com/image.png',
                },
              },
            },
          },
        },
      };
      jest.spyOn(apiService, 'getPokemons').mockReturnValueOnce({
        subscribe: (callback: (data: any) => void) => {
          callback([pokemonData]);
        },
      } as any);
      const spy = jest.spyOn(service['subject'], 'next');

      service.loadPokemons();

      expect(apiService.getPokemons).toHaveBeenCalledTimes(152);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith([pokemonData]);
    });
  });

  describe('getPokemons()', () => {
    it('should return observable of pokemons', () => {
      const spy = jest.spyOn(service['subject'], 'asObservable');

      const result = service.getPokemons();

      expect(spy).toHaveBeenCalledTimes(1);
      expect(result).toEqual(service['subject'].asObservable());
    });
  });
});
