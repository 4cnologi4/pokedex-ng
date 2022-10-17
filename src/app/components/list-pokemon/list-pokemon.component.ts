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
import { map } from "rxjs/operators";

@Component({
  selector: "list-pokemon-component",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.css"],
})
export class ListPokemonComponent implements OnInit {
  public isDisabled: boolean = true;
  public isLoading: boolean = false;
  public listPokemon: Observable<Pokemon[]> = new Observable();
  // public paginator: Paginator;
  public params: Params = {
    limit: 5,
    offset: 0,
  };

  public subscription: Subscription;
  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit(): void {
    this.getWithNgrx();
  }

  public getWithNgrx() {
    this.isLoading = true;
    this.isDisabled = !(this.params.offset > 0);
    console.log(this.isDisabled);
    this.store.dispatch(fetchPokemons({ params: this.params }));
    this.listPokemon = this.store.select(selectListPokemons);
    this.isLoading = false;
  }

  public getNextPokemons() {
    console.log("getNextPokemons");
    this.params = {
      ...this.params,
      offset: this.params.offset + this.params.limit,
    };
    this.getWithNgrx();
  }

  public getPrevPokemons() {
    console.log("getPrevPokemons");
    if (this.params.offset > 0) {
      this.params = {
        ...this.params,
        offset: this.params.offset - this.params.limit,
      };
    } else {
      console.log(this.params);
    }
    this.getWithNgrx();
  }
}
