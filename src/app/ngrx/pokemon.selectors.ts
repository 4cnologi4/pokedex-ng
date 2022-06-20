import { PokemonState } from "./pokemon.state"; 
import { createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectAllPokemons = (state: AppState) => state.pokemon;

export const selectListPokemons = createSelector(
    selectAllPokemons,
    (state: PokemonState) => state.pokemons
);

export const selectListTypes = createSelector(
    selectAllPokemons,
    (state: PokemonState) => state.listTypes
);