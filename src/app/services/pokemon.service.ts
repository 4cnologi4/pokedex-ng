import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import * as url from "../routes/pokemon";

import { ListPokemon, ListTypes, Pokemon, Type, Types } from "../models/pokemon.interface";
import { IPokemonService } from "../interfaces/IPokemonService";

@Injectable({
  providedIn: "root"
})
export class PokemonService implements IPokemonService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(`${url.pokemonList}?limit=15`);
  }

  public getPokemonList(limit: number, offset: number): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(`${url.pokemonList}?limit=${limit}&offset=${offset}`);
  }

  public getPokemonPaginationList(url: string): Observable<ListPokemon> {
    return this.http.get<ListPokemon>(url);
  }

  public getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  public getCatalogType(): Observable<ListTypes> {
    return this.http.get<ListTypes>(url.pokemonType.types);
  }

  public getType(name: string): Observable<Type> {
    return this.http.get<Type>(`${url.pokemonType.types}/${name}`);
  }

}

