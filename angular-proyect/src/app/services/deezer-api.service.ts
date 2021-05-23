import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AlbumSearch } from '../classes/album-search';
import { SongSearch } from '../classes/song-search';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiService {

  private apiUrl = "https://api.deezer.com/search";

  constructor(private http:HttpClient) { }

  public searchDeezer(params:HttpParams):Observable<SongSearch>{
    return this.http.get<SongSearch>(this.apiUrl, {
      params: params
    });
  }
}
