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
  /**
   * @method used to get song info from spotify api
   */
  getSong() {
    this.spotify.getSong(this.id).subscribe((song) => {
      this.song = song;
    });
  }
  /**
   * @method used to get song info from deezer api
   */
  getDeezerSong(){
    this.deezer.getSong(this.id).subscribe((song) => {
      this.song = song;
    });
  }
  /**
   * @param  {number} millis
   * @method getTimeInMinute used to convert milliseconds to minutes in song duration
   */
  getTimeInMinute(millis:any){
    let minutes = Math.floor(millis / 60000);
    let seconds = parseInt(((millis % 60000) / 1000).toFixed(0));
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  /**
   * @param  {number} duration
   * @method secondsToMinutes used to convert seconds to minutes in song duration
   */
  secondsToMinutes(duration){
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;
    var ret = "";
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  /**
   * @method removeFav used to add favorite status in server
   */
  favChange() {
    var params = {
      "song_id": this.id,
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }
    this.favoriteService.addFavorite(params).subscribe(res => {
      this.alreadyLiked = !this.alreadyLiked;
    });
  }
  /**
   * @method removeFav used to remove favorite status in server
   */
  removeFav() {
    var params = {
      "song_id": this.id.toString(),
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }

    this.favoriteService.removeFavorite(params).subscribe(res => {
      if (res.status.status == 'ok') {
        this.alreadyLiked = !this.alreadyLiked;
      } else {

      }
    });
  }
  /**
   * @method checkFavorite used for checking favorite status
   */
  checkFavorite() {
    var params = {
      "song_id": this.id.toString(),
      "platform": this.platform,
      "user_id": localStorage.getItem("ID")
    }

    this.favoriteService.isFavorite(params).subscribe(res => {
      if(res.dataFavorite) {
        this.alreadyLiked = true;
      } else {
        this.alreadyLiked = false;
      }
    });
  }
}
