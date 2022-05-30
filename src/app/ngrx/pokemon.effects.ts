import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  switchMap,
  map,
  withLatestFrom,
  mergeMap,
  catchError,
  exhaustMap,
} from "rxjs/operators";

import { ACTION_TYPES } from "./pokemon.constants";
import { PokemonService } from "../services/pokemon.service";
import { Params } from "../models/params.interface";

import { EMPTY } from "rxjs";

// @Injectable()
// export class PokemonEffects {
//   fetchPokemons$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ACTION_TYPES.FETCH_POKEMON_LIST),
//       mergeMap(() =>
//         this.pokemonService.getAll().pipe(
//           map((response) => ({ type: ACTION_TYPES.LOADED_POKEMONS, response })),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

// this.pokemonService.getPokemonList(5, 1).pipe(

@Injectable()
export class PokemonEffects {
  fetchPokemons$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ACTION_TYPES.FETCH_POKEMON_LIST),
      mergeMap(action =>
        this.pokemonService
          .getPokemonList(action['params'].limit, action['params'].offset)
          .pipe(
            map((response) => ({
              type: ACTION_TYPES.LOADED_POKEMONS,
              response,
            })),
            catchError(() => EMPTY)
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {}
}
