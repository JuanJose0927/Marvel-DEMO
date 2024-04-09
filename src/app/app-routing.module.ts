import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { ComicsComponent } from './comics/comics.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClient } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: "series", component: SeriesComponent
  },
  {
    path: "movies", component: MoviesComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "comics", component: ComicsComponent
  },
  {
    path: "characters", component: CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
