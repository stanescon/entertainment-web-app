import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PosterComponent } from './poster/poster.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { VerDepoisComponent } from './ver-depois/ver-depois.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PosterComponent,
    MovieInfoComponent,
    FavoritosComponent,
    VerDepoisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
