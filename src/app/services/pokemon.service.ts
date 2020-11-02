import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pokemon } from "../models/pokemon.interface";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  constructor() {}
}
