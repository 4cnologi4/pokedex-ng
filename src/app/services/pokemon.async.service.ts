import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as url from "../routes/pokemon";

import { ListPokemon, Pokemon, Type, Types } from "../models/pokemon.interface";

@Injectable({
  providedIn: "root"
})
export class PokemonServiceAsync {
  constructor(private http: HttpClient) {}

  public async getPokemonList(): Promise<ListPokemon> {
    let pokemon = await this.http.get<ListPokemon>(url.pokemonList).toPromise();
    return pokemon;
  }

  public async getPokemon(url: string): Promise<Pokemon> {
    return await this.http.get<Pokemon>(url).toPromise();
  }

  public async getCatalogType(): Promise<Type[]> {
    return await this.http.get<Type[]>(url.pokemonType.types).toPromise();
  }

  public async getType(name: string): Promise<Type> {
    return await this.http.get<Type>(`${url.pokemonType.types}/${name}`).toPromise();
  }

}

