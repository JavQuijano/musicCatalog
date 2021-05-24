import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AlbumSearch } from '../classes/album-search';
import { SongSearch } from '../classes/song-search';
import { retry, catchError, shareReplay, share } from 'rxjs/operators';

const httpTokenOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic NzM0ODU4YjA1NjkxNGRkZTg0YzZhYTYzZDYxOWU5YTk6ZWY1ZDljYzIzMGZkNDYxNDkzMjViMTJiNWZhOGIxZTk='
  })
}

@Injectable({
  providedIn: 'root'
})
export class SpotifyApiService {

  private clientID : String = "734858b056914dde84c6aa63d619e9a9";
  private clientSecret: String = "ef5d9cc230fd46149325b12b5fa8b1e9";
  private accessToken:String = "null";
  private apiUrl = "https://api.spotify.com/v1/";
  private tokenUrl = "https://accounts.spotify.com/api/token";

  constructor(private http:HttpClient) {}

  public async setAccessToken(){
    const body = new HttpParams().set('grant_type', "client_credentials");
    await this.http.post(this.tokenUrl, body.toString(), httpTokenOptions)
    .toPromise().then( (res:any) => {
      this.accessToken = res.access_token
    });
  }

  public getAccessToken():String {
    return this.accessToken;
  }

  public getNewReleases(): Observable<AlbumSearch>{
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    const params = new HttpParams()
      .set('limit','5')
      .set('offset', '0');
    return this.http.get<AlbumSearch>(this.apiUrl + "browse/new-releases", {
      headers: httpOptions,
      params: params
    }).pipe(retry(3), shareReplay());
  }

  public searchSpotify(searchParams:HttpParams):Observable<SongSearch>{
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    return this.http.get<SongSearch>(this.apiUrl + "search", {
      headers: httpOptions,
      params: searchParams
    }).pipe(retry(3), shareReplay());;
  }
}
