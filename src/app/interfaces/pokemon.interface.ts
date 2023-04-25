// export interface Pokemon {
//   id: number;
//   name: string;
//   weight: number;
//   types: PokemonType[];
//   sprites: PokemonSprites;
// }

// export interface PokemonType {
//   slot: number;
//   type: {
//     name: string;
//     url: string;
//   };
// }

// export interface PokemonSprites {
//   front_default: string;
//   front_shiny: string;
//   front_female: string | null;
//   front_shiny_female: string | null;
//   back_default: string;
//   back_shiny: string;
//   back_female: string | null;
//   back_shiny_female: string | null;
// }

// export interface PokemonDetails {
//   name: string;
//   id: number;
//   types: {
//     type: {
//       name: string;
//     }
//   }[];
//   weight: number;
//   abilities: {
//     ability: {
//       name: string;
//     }
//   }[];
//   sprites: {
//     other: {
//       "official-artwork": {
//         front_default: string;
//       }
//     },
//     versions: {
//       "generation-v": {
//         "black-white": {
//           animated: {
//             front_default: string;
//           }
//         }
//       }
//     }
//   };
// }

export interface Pokemon {
  name: string;
  id: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    };
    is_hidden: boolean;
    slot: number;
  }[];
  sprites: {
    front_default: string;
    front_shiny: string;
    front_female: string | null;
    front_shiny_female: string | null;
    back_default: string;
    back_shiny: string;
    back_female: string | null;
    back_shiny_female: string | null;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
    versions: {
      "generation-v": {
        "black-white": {
          animated: {
            front_default: string;
          };
        };
      };
    };
  };
}
