import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { SpotifyTestsComponent } from './components/api-testing/spotify-tests/spotify-tests.component';
import { DezzerTestsComponent } from './components/api-testing/dezzer-tests/dezzer-tests.component';
import { SoundcloudTestsComponent } from './components/api-testing/soundcloud-tests/soundcloud-tests.component';

const appRoutes: Routes = [
  {path: 'spotify-tests', component: SpotifyTestsComponent},
  {path: 'dezzer-tests', component: DezzerTestsComponent},
  {path: 'soundcloud-tests', component: SoundcloudTestsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SpotifyTestsComponent,
    DezzerTestsComponent,
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
export class AppModule { }
