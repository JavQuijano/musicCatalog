import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumSearch } from 'src/app/classes/album-search';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { Album } from '../../../classes/album';

@Component({
  selector: 'app-spotify-tests',
  templateUrl: './spotify-tests.component.html',
  styleUrls: ['./spotify-tests.component.css']
})
export class SpotifyTestsComponent implements OnInit {

  newReleases: AlbumSearch;

  constructor(private spotify:SpotifyApiService) {}

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.callFunctions());
  }

  callFunctions():void {
    this.spotify.getNewReleases().subscribe((newReleases) => {this.newReleases = newReleases;});
    this.searchSong();
  }

  searchSong(){
  }



}
