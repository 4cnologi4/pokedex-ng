import { Component, OnInit, Input } from "@angular/core";

import { Pokemon } from "../../models/pokemon.interface";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "pokemon-component",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {
  public pokemon: Pokemon;
  @Input() url: string;
  public front: boolean;
  public urlImage: string;

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this.getPokemon(this.url);
  }

  getPokemon(url: string) {
    this._pokeService.getPokemon(url).subscribe(pokemon => {
      this.pokemon = pokemon;
      this.urlImage = pokemon.sprites.front_default;
      this.front = true;
    });
  }

  rotateImage() {
    this.urlImage = !this.front
      ? this.pokemon.sprites.front_default
      : this.pokemon.sprites.back_default;
    this.front = !this.front;
  }
}
