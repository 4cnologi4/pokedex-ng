import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { pokemonType } from "./routes/pokemon";
import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { PokemonTypesComponent } from "./components/pokemon-types/pokemon-types.component";
import { ListTypesComponent } from "./components/list-types/list-types.component";

const routes: Routes = [
  { path: "", redirectTo: "/pokemons", pathMatch: "full" },
  { path: "pokemons", component: ListPokemonComponent },
  { path: "types", component: ListTypesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
