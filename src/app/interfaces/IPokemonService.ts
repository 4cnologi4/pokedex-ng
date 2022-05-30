import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


import { ListPokemon, ListTypes, Pokemon, Type, Types } from "../models/pokemon.interface";

export interface IPokemonService {
  getAll(): Observable<ListPokemon>;
  getPokemonList(limit: number, offset: number): Observable<ListPokemon>;
  getPokemonPaginationList(url: string): Observable<ListPokemon>;
  getPokemon(url: string): Observable<Pokemon>;
  getCatalogType(): Observable<ListTypes>;
  getType(name: string): Observable<Type>;
}