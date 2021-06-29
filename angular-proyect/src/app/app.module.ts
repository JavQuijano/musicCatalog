import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './services/auth.service';
import { FavoriteService } from './services/favorite.services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { SpotifyTestsComponent } from './components/api-testing/spotify-tests/spotify-tests.component';
import { DeezerTestsComponent } from './components/api-testing/deezer-tests/deezer-tests.component';
import { HeaderComponent } from './components/header/header.component';
import { SongComponent } from './components/song/song.component';
import { TopSongsComponent } from './components/top-songs/top-songs.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DarkOverlayComponent } from './components/dark-overlay/dark-overlay.component';
import { AlbumComponent } from './components/album/album.component';
import { SongTableComponent } from './components/song-table/song-table.component';
import { FavoriteComponent } from './favorite/favorite.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/releases', pathMatch: 'full' },
  {path: 'spotify-tests', component: SpotifyTestsComponent},
  {path: 'deezer-tests', component: DeezerTestsComponent},
  {path: 'releases', component: CatalogComponent},
  {path: 'top-songs', component: TopSongsComponent},
  {path: 'song/:platform/:id', component: SongComponent},
  {path: 'album/:platform/:id', component: AlbumComponent},
  {path: 'search/:param', component: SongsListComponent},
  {path: 'documentation', component: DocumentationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'mis-favoritos', component: FavoriteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SpotifyTestsComponent,
    DeezerTestsComponent,
    HeaderComponent,
    SongComponent,
    TopSongsComponent,
    CatalogComponent,
    SongsListComponent,
    DocumentationComponent,
    LoginComponent,
    RegisterComponent,
    CarouselComponent,
    DarkOverlayComponent,
    AlbumComponent,
    SongTableComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    CommonModule,
    FontAwesomeModule
  ],
  providers: [AuthService,FavoriteService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
