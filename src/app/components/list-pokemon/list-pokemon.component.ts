import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "list-pokemon-component",
  templateUrl: "./list-pokemon.component.html",
  styleUrls: ["./list-pokemon.component.css"]
})
export class ListPokemonComponent implements OnInit {
  public listPokemon: any[];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this._pokeService.getPokemonList().subscribe(pokemon => {
      this.listPokemon = pokemon["results"];
    });
  }
}
