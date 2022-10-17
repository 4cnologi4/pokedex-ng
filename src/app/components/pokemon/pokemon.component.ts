import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { MatMenuTrigger } from "@angular/material/menu";
import { POKEMON_TYPES, COLORS } from "src/app/ngrx/pokemon.constants";

import { Pokemon } from "../../models/pokemon.interface";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "pokemon-component",
  templateUrl: "./pokemon.component.html",
  styleUrls: ["./pokemon.component.css"],
})
export class PokemonComponent implements OnInit {
  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;
  public pokemon: Pokemon;
  @Input() url: string;
  public front: boolean;
  public urlImage: string;
  public type: string;

  constructor(private _pokeService: PokemonService) {
    this.pokemon = {
      id: 0,
      name: "",
      weight: 0,
      height: 0,
      url: "",
      sprites: { front_shiny: "", front_default: "", back_default: "" },
      base_experience: "",
      types: [],
    };
  }

  ngOnInit() {
    this.getPokemon(this.url);
  }

  getPokemon(url: string) {
    this._pokeService.getPokemon(url).subscribe((pokemon) => {
      this.pokemon = pokemon;
      this.urlImage = pokemon.sprites.front_default;
      this.front = true;
      this.type = pokemon.types[0].type.name;
    });
  }

  rotateImage() {
    this.urlImage = !this.front
      ? this.pokemon.sprites.front_default
      : this.pokemon.sprites.back_default;
    this.front = !this.front;
  }

  contextMenuPosition = { x: "0px", y: "0px" };

  onContextMenu(event: MouseEvent) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.contextMenu.menu.focusFirstItem("mouse");
    this.contextMenu.openMenu();
  }

  showResume() {
    alert(`Nombre: ${this.pokemon.name}`);
    console.log(`Nombre: ${this.pokemon.name}`);
  }

  getBackgroundColor(pokemonType: string) {
    switch (pokemonType) {
      case POKEMON_TYPES.normal:
        return COLORS.img_bg_normal;
      case POKEMON_TYPES.fighting:
        return COLORS.img_bg_fighting;
      case POKEMON_TYPES.flying:
        return COLORS.img_bg_flying;
      case POKEMON_TYPES.poison:
        return COLORS.img_bg_poison;
      case POKEMON_TYPES.ground:
        return COLORS.img_bg_ground;
      case POKEMON_TYPES.rock:
        return COLORS.img_bg_rock;
      case POKEMON_TYPES.bug:
        return COLORS.img_bg_bug;
      case POKEMON_TYPES.ghost:
        return COLORS.img_bg_ghost;
      case POKEMON_TYPES.steel:
        return COLORS.img_bg_steel;
      case POKEMON_TYPES.fire:
        return COLORS.img_bg_fire;
      case POKEMON_TYPES.water:
        return COLORS.img_bg_water;
      case POKEMON_TYPES.grass:
        return COLORS.img_bg_grass;
      case POKEMON_TYPES.electric:
        return COLORS.img_bg_electric;
      case POKEMON_TYPES.psychic:
        return COLORS.img_bg_psychic;
      case POKEMON_TYPES.ice:
        return COLORS.img_bg_ice;
      case POKEMON_TYPES.dragon:
        return COLORS.img_bg_dragon;
      case POKEMON_TYPES.dark:
        return COLORS.img_bg_dark;
      case POKEMON_TYPES.fairy:
        return COLORS.img_bg_fairy;
      case POKEMON_TYPES.unknown:
        return COLORS.img_bg_unknown;
      case POKEMON_TYPES.shadow:
        return COLORS.img_bg_shadow;
      default:
        return COLORS.img_bg_unknown;
    }
  }
}
