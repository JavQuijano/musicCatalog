import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  value: string;
  tracks: any;

  constructor(private route: ActivatedRoute, private spotify:SpotifyApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['param']);
      this.value = params['param']; 
    });

    this.spotify.setAccessToken().then(() => this.searchSong());
  }

  searchSong() {
    this.spotify.searchSpotify(this.value).subscribe((results) => {this.tracks = results.tracks.items; console.log(this.tracks)});
  }

  getTimeInMinute(millis){
    let minutes = Math.floor(millis / 60000);
    let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}
