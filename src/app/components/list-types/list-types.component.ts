import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ListTypes, Types } from "src/app/models/pokemon.interface";
import { fetchTypes } from "src/app/ngrx/pokemon.actions";
import { selectListTypes } from "src/app/ngrx/pokemon.selectors";

import * as fromApp from "../../ngrx/app.reducer";

@Component({
  selector: "list-types-component",
  templateUrl: "./list-types.component.html",
  styleUrls: ["./list-types.component.css"],
})
export class ListTypesComponent implements OnInit {
  public listTypes: Observable<Types[]> = new Observable();

  constructor(private store: Store<fromApp.AppState>) {}

  ngOnInit() {
    this.store.dispatch(fetchTypes());
    this.listTypes = this.store.select(selectListTypes);
  }

  // getCatalogType() {
  //   this._pokeService
  //     .getCatalogType()
  //     .subscribe((type) => (this.listTypes = type.results));
  // }
}
