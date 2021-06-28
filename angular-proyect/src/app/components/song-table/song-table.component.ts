import { Component, Input, OnInit } from '@angular/core';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-song-table',
  templateUrl: './song-table.component.html',
  styleUrls: ['./song-table.component.css']
})
export class SongTableComponent implements OnInit {
  @Input() tracks;
  @Input() platform;
  faSpotify = faSpotify;
  faDeezer = faDeezer;

  constructor() { }

  ngOnInit(): void {
  }

  favClick(){
    //todo favorito
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
