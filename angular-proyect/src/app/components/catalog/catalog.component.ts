import { Component, OnInit } from '@angular/core';
import { AlbumSearch } from 'src/app/classes/album-search';
import { HttpParams } from "@angular/common/http";
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private spotify:SpotifyApiService) { }

  newReleases: AlbumSearch;

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.callFunctions());
  }

  callFunctions():void {
    this.spotify.getNewReleases().subscribe((newReleases) => {this.newReleases = newReleases;
    console.log(newReleases)});
  }

  searchSong(){
    const params = new HttpParams()
    .set('q', 'coldplay clocks')
    .set('type', 'track');
    this.spotify.searchSpotify(params).subscribe((results) => {console.log(results)})
  }
}
