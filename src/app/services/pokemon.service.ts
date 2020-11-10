import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { Pokemon } from "../models/pokemon.interface";

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private url: string = "https://pokeapi.co/api/v2/pokemon?limit=12";
  constructor(private http: HttpClient) {}

  public getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.url);
  }

  public getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}

// public getUsers(url: string): Observable<IUser[]> {
//   return this._http.get(url)
//     .map((response: Response) => <IUser[]>response.json());
// }

// public getUsers(url: string): Observable<IUser[]> {
//   return this._http.get<IUser[]>(url);
// }
