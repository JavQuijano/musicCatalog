import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { retry, catchError, shareReplay, share } from 'rxjs/operators';
import { Album } from '../classes/album';
import { Song } from '../classes/song';

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


  private clientID : String = "242c1bc901fa48e3b5a3313723e577c2";
  private clientSecret: String = "6e78075abbfc4ced8dc0615203038507";
  private accessToken:String = "null";
  private apiUrl = "https://api.spotify.com/v1/";
  private tokenUrl = "https://accounts.spotify.com/api/token";

  constructor(private http:HttpClient) {}
  /**
   * @async
   * @method setAccessToken sets spotify api credentials
   */
  public async setAccessToken(){
    const body = new HttpParams().set('grant_type', "client_credentials");
    await this.http.post(this.tokenUrl, body.toString(), httpTokenOptions)
    .toPromise().then( (res:any) => {
      this.accessToken = res.access_token;
    });
  }
  /**
   * @returns String
   */
  public getAccessToken():String {
    return this.accessToken;
  }
  /**
   * @param  {string} value
   * @returns Observable
   */
  public searchSpotify(value:string):Observable<any>{
    const params = new HttpParams().set('q', value).set('type', 'track')
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    return this.http.get<any>(this.apiUrl + "search", {
      headers: httpOptions,
      params: params
    }).pipe(retry(3), shareReplay());
  }
  /**
   * @param  {any} albumId
   */
  public getAlbum(albumId: any){
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    return this.http.get<Album>(this.apiUrl + "albums/" + albumId, {
      headers: httpOptions
    }).pipe(retry(3), shareReplay());
  }
  /**
   * @param  {any} songId
   * @returns Observable
   */
  public getSong(songId : any): Observable<any>{
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    return this.http.get<Song>(this.apiUrl + "tracks/" + songId, {
      headers: httpOptions
    }).pipe(retry(3), shareReplay());
  }
  /**
   * @returns Observable
   */
  public getTopTen(): Observable<any>{
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    return this.http.get<any>(this.apiUrl + "playlists/37i9dQZEVXbMDoHDwVN2tF", {
      headers: httpOptions
    }).pipe(retry(3), shareReplay());
  }
  /**
   * @returns Observable
   */
  public getNewReleases(): Observable<any>{
    const httpOptions = new HttpHeaders({
      'Authorization': 'Bearer ' + this.accessToken
    });
    const params = new HttpParams()
      .set('limit','50')
      .set('offset', '0');
    return this.http.get<any>(this.apiUrl + "browse/new-releases", {
      headers: httpOptions,
      //params: params
    }).pipe(retry(3), shareReplay());
  }

}
