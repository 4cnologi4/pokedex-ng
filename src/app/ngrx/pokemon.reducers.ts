import { createReducer, on } from "@ngrx/store";
import * as PokemonActions from './pokemon.actions';
import { PokemonState } from "./pokemon.state";

export const initialState: PokemonState = {
    pokemons: [],
    listTypes: []
}

export const pokemonReducer = createReducer(
    initialState,
    on(PokemonActions.fetchPokemons, (state) => {
        return { ...state }
    }),
    on(PokemonActions.loadedPokemons, (state, payload) => {
        return { ...state, pokemons: payload.response.results }
    }),
    on(PokemonActions.fetchTypes, (state) => {
        return { ...state }
    }),
    on(PokemonActions.loadedTypes, (state, payload) => {
        return { ...state, listTypes: payload.response.results }
    })
);
