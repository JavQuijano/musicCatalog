import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SpotifyTestsComponent } from './components/api-testing/spotify-tests/spotify-tests.component';
import { DeezerTestsComponent } from './components/api-testing/deezer-tests/deezer-tests.component';
import { HeaderComponent } from './components/header/header.component';
import { SongComponent } from './components/song/song.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { CatalogComponent } from './components/catalog/catalog.component';

const appRoutes: Routes = [
  {path: 'spotify-tests', component: SpotifyTestsComponent},
  {path: 'deezer-tests', component: DeezerTestsComponent},
  {path: 'releases', component: CatalogComponent},
  {path: 'top-songs', component: TopSongsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SpotifyTestsComponent,
    DeezerTestsComponent,
    HeaderComponent,
    SongComponent,
    TopSongsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
