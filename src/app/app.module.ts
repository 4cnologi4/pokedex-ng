import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./material-module/angular-material.module";

import { AppComponent } from "./app.component";
import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  declarations: [AppComponent, PokemonComponent, ListPokemonComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
