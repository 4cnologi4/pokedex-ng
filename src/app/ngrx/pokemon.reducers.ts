import { createReducer, on } from "@ngrx/store";
import * as PokemonActions from './pokemon.actions';
import { PokemonState } from "./pokemon.state";

export const initialState: PokemonState = {
    pokemons: []
}

export const pokemonReducer = createReducer(
    initialState,
    on(PokemonActions.fetchPokemons, (state) => {
        return { ...state }
    }),
    on(PokemonActions.loadedPokemons, (state, payload) => {
        console.log({payload})
        return { ...state, pokemons: payload.response.results }
    })
);
