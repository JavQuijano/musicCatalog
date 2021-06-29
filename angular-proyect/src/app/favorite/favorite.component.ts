import { Component, OnInit } from '@angular/core';
import { DeezerApiService } from '../services/deezer-api.service';
import { FavoriteService } from '../services/favorite.services';
import { SpotifyApiService } from '../services/spotify-api.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: any;
  spotiDetails = Array();
  deezerDetails = Array();
  constructor(private favoriteService: FavoriteService, private spotifyService: SpotifyApiService, private deezerService: DeezerApiService) { }

  ngOnInit(): void {
    this.spotifyService.setAccessToken().then(() => this.getFavorites());
  }

  getFavorites() {
    var params = {
      "user_id": localStorage.getItem("ID")
    }
    this.favoriteService.getUserFavorites(params).subscribe(res => {
      res.favorites.forEach(fav => {
        switch (fav.platform){
          case "spotify":
            this.spotifyService.getSong(fav.song_id).subscribe(spotires =>{
              this.spotiDetails.push(spotires);
            });
            break;
          case "deezer":
            this.deezerService.getSong(fav.song_id).subscribe(deezres =>{
              this.deezerDetails.push(deezres);
            });
            break;
        }
      });
    });
  }
}
