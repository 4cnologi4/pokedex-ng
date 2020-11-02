import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../models/pokemon.interface";

import { PokemonService } from "../services/pokemon.service";

@Component({
  selector: "pokemon",
  templateUrl: "./pokemon.component.html"
})
export class PokemonComponent {
  public pokemons: Pokemon[];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this._pokeService.getPokemon().subscribe(pokemon => {
      this.pokemons = pokemon["results"];
      console.log(pokemon["results"]);
    });
  }
}
