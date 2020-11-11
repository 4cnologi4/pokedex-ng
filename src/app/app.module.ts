import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from "./material-module/angular-material.module";

import { AppComponent } from "./app.component";
import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { ContextMenuComponent } from "./components/context-menu/context-menu.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  declarations: [
    AppComponent,
    PokemonComponent,
    ListPokemonComponent,
    ContextMenuComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
