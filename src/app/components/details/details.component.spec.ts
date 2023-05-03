import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon.interface';
import { SharedPokemonService } from '../../services/shared-pokemon.service';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRoute: ActivatedRoute;
  let sharedPokemonService: SharedPokemonService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }
          }
        },
        {
          provide: SharedPokemonService,
          useValue: {
            loadPokemons: jest.fn(),
            getPokemons: jest.fn(() => of([
              { id: 1, name: 'Pokemon 1', weight: 10, abilities: [], types: [], sprites: { versions: { 'generation-v': { 'black-white': { animated: { front_default: 'https://example.com/image.png' } } } } } } as unknown as Pokemon,
              { id: 2, name: 'Pokemon 2', weight: 20, abilities: [], types: [], sprites: { versions: { 'generation-v': { 'black-white': { animated: { front_default: 'https://example.com/image.png' } } } } } } as unknown as Pokemon,
            ] as Pokemon[])),
            findPokemonById: jest.fn((id: number) => {
              return new Observable((observer) => {
                observer.error('Failed to find Pokemon by id');
              });
            })
          }
        }

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    sharedPokemonService = TestBed.inject(SharedPokemonService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component with the correct Pokemon', () => {
    fixture.detectChanges();
    expect(sharedPokemonService.loadPokemons).toHaveBeenCalled();
    expect(component.id).toEqual(1);
    expect(component.pokemon).toEqual({ id: 1, name: 'Pokemon 1', weight: 10, abilities: [], types: [], sprites: { versions: { 'generation-v': { 'black-white': { animated: { front_default: 'https://example.com/image.png' } } } } } } as unknown as Pokemon);
  });

  it('should handle error when getting Pokemon list', () => {
    sharedPokemonService.getPokemons = jest.fn(() => new Observable(observer => {
      observer.error('Failed to get Pokemon list');
    }));
    fixture.detectChanges();
    expect(component.pokemons).toEqual([]);
    expect(component.pokemon).toBeUndefined();
  });

});
