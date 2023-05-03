import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SharedPokemonService } from '../../services/shared-pokemon.service';
import { of } from 'rxjs';
import { Pokemon } from '../../interfaces/pokemon.interface';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let sharedPokemonService: SharedPokemonService;

  beforeEach(async () => {
    const mockPokemon: Pokemon[] = [{
      name: 'Charmander',
      id: 4,
      types: [{ slot: 1, type: { name: 'fire', url: '' } }],
      weight: 8.5,
      abilities: [],
      sprites: {
        front_default: '',
        front_shiny: '',
        front_female: null,
        front_shiny_female: null,
        back_default: '',
        back_shiny: '',
        back_female: null,
        back_shiny_female: null,
        other: {
          "official-artwork": {
            front_default: ''
          }
        },
        versions: {
          "generation-v": {
            "black-white": {
              animated: {
                front_default: ''
              }
            }
          }
        }
      }
    }];

    const sharedPokemonServiceMock = {
      loadPokemons: jest.fn(),
      getPokemons: jest.fn().mockReturnValue(of(mockPokemon))
    };

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: SharedPokemonService, useValue: sharedPokemonServiceMock }]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    sharedPokemonService = TestBed.inject(SharedPokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pokemons from service', () => {
    component.ngOnInit();
    expect(sharedPokemonService.getPokemons).toHaveBeenCalled();
    expect(component.pokemons.length).toBe(1);
    expect(component.pokemons[0].name).toBe('Charmander');
  });
});

