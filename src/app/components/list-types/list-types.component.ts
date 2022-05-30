import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: "list-types-component",
  templateUrl: "./list-types.component.html",
  styleUrls: ["./list-types.component.css"],
})
export class ListTypesComponent implements OnInit {
  public listTypes: any[];

  constructor(private _pokeService: PokemonService) {}

  ngOnInit() {
    this.getCatalogType();
  }

  getCatalogType() {
    this._pokeService
      .getCatalogType()
      .subscribe((type) => (this.listTypes = type.results));
  }
}
