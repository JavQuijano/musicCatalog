import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerApiService } from 'src/app/services/deezer-api.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';

import { FavoriteService } from '../../services/favorite.services';
import { faHeart as lightHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as boldHeart } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  id: String;
  song: any;
  platform: String;
  alreadyLiked: boolean
  lightHeart = lightHeart;
  boldHeart = boldHeart;
  faSpotify = faSpotify;
  faDeezer = faDeezer;

  constructor(private route: ActivatedRoute, private spotify:SpotifyApiService, private deezer:DeezerApiService, private favoriteService:FavoriteService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.platform = params['platform'];
    });
    this.checkFavorite();
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

  favChange() {
    var params = {
      "song_id": this.id.toString(),
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }
    this.favoriteService.addFavorite(params).subscribe(res => {
      //cambiar icono
      //mostrar notificacion
    });
  }

  removeFav() {
    var params = {
      "song_id": this.id.toString(),
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }

    this.favoriteService.removeFavorite(params).subscribe(res => {
      if (res == 'ok') {
        //cambiar icono
        //mostrar notificacion
      } else {
        
      }
    });
  }

  checkFavorite() {
    var params = {
      "song_id": this.id.toString(),
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }

    this.favoriteService.isFavorite(params).subscribe(res => {
      if(res.dataFavorite) {
        console.log(1);
        this.alreadyLiked = true;
      } else {
        console.log(2);
        this.alreadyLiked = false;
      }
    });
  }
}
