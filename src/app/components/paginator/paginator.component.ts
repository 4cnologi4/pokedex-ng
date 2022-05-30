import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Paginator } from "src/app/models/paginator.interface";
import { ListPokemon, Pokemon } from "src/app/models/pokemon.interface";
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "paginator-component",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.css"],
})
export class PaginatorComponent implements OnInit {
  public listPokemon: Pokemon[];
  public paginator: Paginator;
  public limit: number = 5;
  public offset: number = 0;
  public sizes: number[] = [5, 10, 25, 50];

  constructor(private store: Store<{ pokemons: ListPokemon}>, private _pokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this._pokeService
      .getPokemonList(this.limit, this.offset)
      .subscribe((pokemon) => {
        this.listPokemon = pokemon.results;
        this.paginator.count = pokemon.count;
        this.paginator.prev = pokemon.previous;
        this.paginator.next = pokemon.next;
        this.paginator.results = pokemon.results;
        this.offset = 5;
        console.log(`Init_pokemon: ${pokemon}`);
      });
  }

  public getNextPokemons(url: string) {
    this._pokeService
    .getPokemonPaginationList(url)
    .subscribe((pokemon) => {
        this.listPokemon = pokemon.results;
        this.paginator.count = pokemon.count;
        this.paginator.prev = pokemon.previous;
        this.paginator.next = pokemon.next;
        this.paginator.results = pokemon.results;
        console.log(`pokemon: ${pokemon}`);
      });
      console.log(`this.paginator: ${this.paginator}`);
  }

//   public getPrevPokemons() {
//     this._pokeService
//     .getPokemonList(this.limit, this.offset)
//     .subscribe((pokemon) => {
//       this.listPokemon = pokemon.results;
//       this.paginator.count = pokemon.count;
//       this.paginator.prev = pokemon.previous;
//       this.paginator.next = pokemon.next;
//       this.paginator.results = pokemon.results;
//     });
//   }

}
