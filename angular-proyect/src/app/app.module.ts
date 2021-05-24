import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SpotifyTestsComponent } from './components/api-testing/spotify-tests/spotify-tests.component';
import { DeezerTestsComponent } from './components/api-testing/deezer-tests/deezer-tests.component';
import { SoundcloudTestsComponent } from './components/api-testing/soundcloud-tests/soundcloud-tests.component';

const appRoutes: Routes = [
  {path: 'spotify-tests', component: SpotifyTestsComponent},
  {path: 'deezer-tests', component: DeezerTestsComponent},
  {path: 'soundcloud-tests', component: SoundcloudTestsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SpotifyTestsComponent,
    DeezerTestsComponent,
    SoundcloudTestsComponent
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
