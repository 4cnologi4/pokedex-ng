import { createAction, props } from "@ngrx/store";
import { Params } from "../models/params.interface";

import { ListPokemon, ListTypes, Pokemon } from "../models/pokemon.interface";
import { ACTION_TYPES } from "./pokemon.constants";

// export const fetchPokemons = createAction(
//     ACTION_TYPES.FETCH_POKEMON_LIST
// )

export const fetchPokemons = createAction(
  ACTION_TYPES.FETCH_POKEMON_LIST,
  props<{ params: Params }>()
);

export const loadedPokemons = createAction(
  ACTION_TYPES.LOADED_POKEMONS,
  props<{ response: ListPokemon }>()
  // props<{ pokemons: Pokemon[] }>()
);

export const fetchTypes = createAction(
  ACTION_TYPES.FETCH_TYPES
)

export const loadedTypes = createAction(
  ACTION_TYPES.LOADED_TYPES,
  props<{ response: ListTypes }>()
)
