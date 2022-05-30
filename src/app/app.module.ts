import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./material-module/angular-material.module";
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from "@angular/common";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/navbar/navbar.component";
import { ListPokemonComponent } from "./components/list-pokemon/list-pokemon.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { PokemonTypesComponent } from "./components/pokemon-types/pokemon-types.component"
import { ListTypesComponent } from "./components/list-types/list-types.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import * as fromApp from './ngrx/app.reducer';
import { environment } from "src/environments/environment";
import { PokemonEffects } from "./ngrx/pokemon.effects";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([PokemonEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    PaginatorComponent,
    PokemonComponent,
    ListPokemonComponent,
    PokemonTypesComponent,
    ListTypesComponent
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
})
export class AppModule {}
