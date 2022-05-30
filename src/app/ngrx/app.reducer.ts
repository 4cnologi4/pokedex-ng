import { ActionReducerMap } from "@ngrx/store";

import { pokemonReducer } from "./pokemon.reducers";
import { PokemonState } from "./pokemon.state";

export interface AppState {
  pokemon: PokemonState;
}

export const appReducer: ActionReducerMap<AppState> = {
  pokemon: pokemonReducer,
};
