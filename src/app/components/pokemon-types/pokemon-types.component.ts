import { Component, OnInit, Input } from "@angular/core";

import { Type } from "../../models/pokemon.interface";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "pokemon-types",
  templateUrl: "./pokemon-types.component.html",
  styleUrls: ["./pokemon-types.component.css"],
})
export class PokemonTypesComponent implements OnInit {
  public type: Type;
  @Input() url: string;
  pokeUrl: string;
  coverImg: string;

  public constructor(private _pokeService: PokemonService) {
    this.type = {
      id: 0,
      name: "",
      pokemon: [],
    };
  }

  ngOnInit() {
    this.getType(this.url);
  }

  getType(name: string) {
    this._pokeService.getType(name).subscribe((type) => {
      this.type = type;
      this._pokeService
        .getPokemon(type.pokemon[0].pokemon.url)
        .subscribe(
          (pokemon) => (this.coverImg = pokemon.sprites.front_default)
        );
    });
  }
}
