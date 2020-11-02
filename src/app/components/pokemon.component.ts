import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../models/pokemon.interface";

import { PokemonService } from "../services/pokemon.service";

@Component({
  selector: "pokemon",
  templateUrl: "./pokemon.component.html"
})
export class PokemonComponent {
  public pokemons: Pokemon[] = [];
  public pokemonList: Pokemon[];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this._pokeService.getPokemonList().subscribe(pokemon => {
      this.pokemonList = pokemon["results"];
      for (let p of this.pokemonList) {
        this.getPokemon(p.url);
        console.log(p.url);
      }
    });
  }

  getPokemon(url: string) {
    this._pokeService.getPokemon(url).subscribe(pokemon => {
      this.pokemons.push(pokemon as Pokemon);
    });
  }
}
