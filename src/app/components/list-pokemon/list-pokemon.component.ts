import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, Subscription } from "rxjs";
import { Paginator } from "src/app/models/paginator.interface";
import { Pokemon } from "src/app/models/pokemon.interface";
import { PokemonService } from "../../services/pokemon.service";

import * as fromApp from "../../ngrx/app.reducer";
import { selectListPokemons } from "src/app/ngrx/pokemon.selectors";
import { fetchPokemons } from "src/app/ngrx/pokemon.actions";
import { Params } from "src/app/models/params.interface";

@Component({
  selector: "list-pokemon-component",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.css"],
})
export class ListPokemonComponent implements OnInit {
  // public listPokemon: Observable<Pokemon[]>;
  public listPokemon: Observable<Pokemon[]> = new Observable();
  // public paginator: Paginator;
  public params: Params = {
    limit: 5,
    offset: 0,
  };

  public subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    // this.store.dispatch(fetchPokemons());
    this.store.dispatch(fetchPokemons({ params: this.params }));
    this.listPokemon = this.store.select(selectListPokemons);
    console.log(this.listPokemon);
    // this.getWithNgrx();
    // this.getPokemonList();
  }

  // getPokemonList() {
  //   this._pokeService
  //     .getPokemonList(this.limit, this.offset)
  //     .subscribe((pokemon) => {
  //       this.listPokemon = pokemon.results;
  //       this.paginator.count = pokemon.count;
  //       this.paginator.prev = pokemon.previous;
  //       this.paginator.next = pokemon.next;
  //       this.paginator.results = pokemon.results;
  //       this.offset = 5;
  //     });
  // }

  // public getWithNgrx() {
  //   this.subscription = this.store
  //     .select('pokemon')
  //     .pipe(map(pokemonState => pokemonState.pokemons))
  //     .subscribe((pokemons: Pokemon[]) => {
  //       this.listPokemon = pokemons;
  //     });
  // }

  public getNextPokemons() {}

  public getPrevPokemons() {}
}
