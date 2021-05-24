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
    console.log(this.spotify.getAccessToken());
    this.spotify.getNewReleases().subscribe((newReleases) => {this.newReleases = newReleases;
    console.log(newReleases)});
    this.searchSong();
  }

  searchSong(){
    const params = new HttpParams()
    .set('q', 'coldplay clocks')
    .set('type', 'track');
    this.spotify.searchSpotify(params).subscribe((results) => {console.log(results)})
  }

}
