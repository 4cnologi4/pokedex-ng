import { ListTypes, Pokemon, Types } from "../models/pokemon.interface";

export interface PokemonState {
    pokemons: Pokemon[];
    listTypes: Types[];
}