import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { InfoPageComponent } from './movies/info-page/info-page.component';
import { HeaderComponent } from './home/header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { ContentPageComponent } from './home/content-page/content-page.component';
import { FooterComponent } from './home/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    ComicsComponent,
    SeriesComponent,
    InfoPageComponent,
    HeaderComponent,
    MoviesComponent,
    ContentPageComponent,
    FooterComponent
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
