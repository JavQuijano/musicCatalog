import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { SongSearch } from '../classes/song-search';

const httpOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'x-requested-with': ''
  });
const globalParams = new HttpParams()
  .set('output', 'jsonp')
@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private apiUrl = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/";

  constructor(private http:HttpClient) { }

  public searchDeezer(params:HttpParams):Observable<SongSearch>{
    return this.http.get<SongSearch>(this.apiUrl + 'search', {
      params: params
    });
  }

  public getTopTen():Observable<any>{

    return this.http.get<any>(this.apiUrl + 'playlist/3155776842', {
      headers: httpOptions
    });
  }

  public getAlbum(albumId :any){
    return this.http.get<SongSearch>(this.apiUrl + 'album/' + albumId, {
      headers: httpOptions
    });
  }

  public getSong(songId:any){
    return this.http.get<SongSearch>(this.apiUrl + 'track/' + songId, {
      headers: httpOptions
    });
  }

}
