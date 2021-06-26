import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { DeezerApiService } from 'src/app/services/deezer-api.service';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {
  value: string;
  tracks: any;
  tracksDeezer:any;
  faSpotify = faSpotify;
  faDeezer = faDeezer;

  constructor(private route: ActivatedRoute, private spotify:SpotifyApiService, private deezer:DeezerApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['param']);
      this.value = params['param'];
    });

    this.spotify.setAccessToken().then(() => this.searchSong());
    this.searchSongDeezer();
  }

  searchSong() {
    this.spotify.searchSpotify(this.value).subscribe((results) => {this.tracks = results.tracks.items; console.log(this.tracks)});
  }

  searchSongDeezer() {
    const params = new HttpParams().set('q', this.value);
    this.deezer.searchDeezer(params).subscribe((results:any ) => {this.tracksDeezer = results.data; console.log(this.tracksDeezer)});
  }

  getTimeInMinute(millis){
    let minutes = Math.floor(millis / 60000);
    let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  secondsToMinutes(duration){
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var ret = "";
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }
}
