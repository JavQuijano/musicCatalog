import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private spotify:SpotifyApiService) { }

  newReleases: any;

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.getNewReleases());
  }

  getNewReleases():void {
    this.spotify.getNewReleases().subscribe((newReleases) => {this.newReleases = newReleases});
  }
}
