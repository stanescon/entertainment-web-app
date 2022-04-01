import { VerDepoisComponent } from './ver-depois/ver-depois.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'movie-info/:id/:imdbId', component: MovieInfoComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'ver-depois', component: VerDepoisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
