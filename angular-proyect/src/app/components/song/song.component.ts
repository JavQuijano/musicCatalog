import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  id: String;
  song: any;

  constructor(private route: ActivatedRoute, private spotify:SpotifyApiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id']; 
    });

   this.spotify.setAccessToken().then(() => this.getSong());
   
   
  }

  getSong() {
    this.spotify.getSong(this.id).subscribe((song) => {this.song = song});
  }
  
  getTimeInMinute(millis){
    let minutes = Math.floor(millis / 60000);
    let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
}
