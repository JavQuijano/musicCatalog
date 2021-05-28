import { Component, OnInit, Input } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {
  @Input() company: string;

  constructor(private spotify:SpotifyApiService) { }

  topSongs: any;

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.getTopTen());
  }

  getTopTen():void {
    this.spotify.getTopTen().subscribe((topSongs) => {this.topSongs = topSongs.tracks.items.slice(0, 10);
    console.log(this.topSongs[0])
    });
    
  }

  getTimeInMinute(millis){
    let minutes = Math.floor(millis / 60000);
    let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

}
