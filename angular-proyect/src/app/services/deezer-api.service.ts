import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { retry, catchError, shareReplay, share } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SongSearch } from '../classes/song-search';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private apiUrl = "https://api.deezer.com/";

  constructor(private http:HttpClient) { }

  public searchDeezer(params:HttpParams):Observable<SongSearch>{
    return this.http.get<SongSearch>(this.apiUrl + 'search', {
      params: params
    });
  }

  public getTopTen():Observable<any>{

    return this.http.get<any>(this.apiUrl + 'playlist/3155776842').pipe(retry(3), shareReplay());
  }

  public getAlbum(albumId :any){
    return this.http.get<SongSearch>(this.apiUrl + 'album/' + albumId);
  }

  public getSong(songId:any){
    return this.http.get<SongSearch>(this.apiUrl + 'track/' + songId);
  }

}
