export interface ListPokemon {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  id: number;
  name: string;
  weight: number;
  height: number;
  url: string;
  sprites: Sprites;
  base_experience: any;
  types: PokemonTypes[];
}

interface PokemonTypes {
  slot: number;
  type: Types;
}

interface Sprites {
  front_shiny: string;
  front_default: string;
  back_default: string;
}

export interface Types {
  name: string;
  url: string;
}

export interface ListTypes {
  count: number;
  next: string;
  previous: string;
  results: Types[];
}

export interface TypePokemon {
  pokemon: Pokemon;
}

export interface Type {
  id: number;
  name: string;
  pokemon: TypePokemon[];
}