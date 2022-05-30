import {createAction, props} from '@ngrx/store';

import { ListPokemon, Pokemon } from "../models/pokemon.interface";
import { ACTION_TYPES } from './pokemon.constants';

export const fetchPokemons = createAction(
    ACTION_TYPES.FETCH_POKEMON_LIST
)

export const loadedPokemons = createAction(
    ACTION_TYPES.LOADED_POKEMONS,
    props<{ response: ListPokemon }>()
    // props<{ pokemons: Pokemon[] }>()
)