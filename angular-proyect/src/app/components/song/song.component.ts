import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerApiService } from 'src/app/services/deezer-api.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  id: String;
  song: any;
  platform: String;

  constructor(private route: ActivatedRoute, private spotify:SpotifyApiService, private deezer:DeezerApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.platform = params['platform'];
    });
    switch (this.platform){
      case 'spotify': {
        this.getSong();
        break;
      }
      case 'deezer':{
        this.getDeezerSong();
        break;
      }

    }
   this.spotify.setAccessToken().then(() => this.getSong());


  }

  getSong() {
    this.spotify.getSong(this.id).subscribe((song) => {
      this.song = song;
    });
  }

  getDeezerSong(){
    this.deezer.getSong(this.id).subscribe((song) => {
      this.song = song;
    });
  }

  getTimeInMinute(millis:any){
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
