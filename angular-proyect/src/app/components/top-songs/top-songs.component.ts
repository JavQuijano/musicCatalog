import { Component, OnInit, Input } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { DeezerApiService } from 'src/app/services/deezer-api.service'
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {
  @Input() company: string;
  faSpotify = faSpotify;
  faDeezer = faDeezer;

  constructor(private spotify:SpotifyApiService, private deezer:DeezerApiService) { }

  topSongs: any;
  deezerTopSongs: any;

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.getSpotifyTopTen());
    this.getDeezerTopTen();
  }

  getSpotifyTopTen():void {
    this.spotify.getTopTen().subscribe((topSongs) => {this.topSongs = topSongs.tracks.items.slice(0, 10); console.log(this.deezerTopSongs)});
  }

  getDeezerTopTen():void {
    this.deezer.getTopTen().subscribe((deezerTopSongs) => {this.deezerTopSongs = deezerTopSongs.tracks.data.slice(0, 10); console.log(this.deezerTopSongs)})
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
