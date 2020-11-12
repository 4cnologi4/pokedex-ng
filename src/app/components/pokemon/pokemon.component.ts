import { Component, OnInit, Input, ViewChild } from "@angular/core";

import { Pokemon } from "../../models/pokemon.interface";

import { PokemonService } from "../../services/pokemon.service";

import { ContextMenuComponent } from "../context-menu/context-menu.component";

@Component({
  selector: "pokemon-component",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"]
})
export class PokemonComponent implements OnInit {
  @ViewChild(ContextMenuComponent, {static: false}) contextMenu: ContextMenuComponent;
  public pokemon: Pokemon;
  @Input() url: string;
  public front: boolean;
  public urlImage: string;

  constructor(private _pokeService: PokemonService) {}

  openMenu(event: MouseEvent, item: Item) {
    console.log(this.contextMenu);
    this.contextMenu.onContextMenu(event, item);
  }

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

export interface Item {
  id: number;
  name: string;
}
