export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  types: PokemonType[];
  sprites: PokemonSprites;
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string;
  back_shiny: string;
  back_female: string | null;
  back_shiny_female: string | null;
}
