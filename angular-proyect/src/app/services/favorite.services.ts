import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FavoriteI } from '../models/favorite';
import { FavoriteResponseI } from '../models/favorite-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class FavoriteService {
  FAVORITE_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  constructor(private httpClient: HttpClient) { }
  /**
   * @param  {FavoriteI} favorite
   * @returns Observable
   */
  addFavorite(favorite: FavoriteI): Observable<FavoriteResponseI> {
    return this.httpClient.post<FavoriteResponseI>(`${this.FAVORITE_SERVER}/favorite`,
    favorite).pipe(tap(
        (res: FavoriteResponseI) => {
          if (res) {
            res.dataFavorite;
          }
        })
      );
  }
  /**
   * @param  {any} params
   * @returns Observable
   */
  isFavorite(params: any): Observable<FavoriteResponseI> {
    return this.httpClient.post<FavoriteResponseI>(`${this.FAVORITE_SERVER}/user_favorite`, params).pipe(tap(
        (res: FavoriteResponseI) => {
          if (res) {
            res.dataFavorite;
          }
        })
      );
  }
  /**
   * @param  {any} params
   * @returns Observable
   */
  removeFavorite(params: any): Observable<any> {
    return this.httpClient.post<any>(`${this.FAVORITE_SERVER}/remove_favorite`, params).pipe(tap(
        (res: any) => {
          if (res) {
            res.status.status
          }
        })
      );
  }
  /**
   * @param  {any} params
   */
  getUserFavorites(params:any){
    return this.httpClient.post<any>(`${this.FAVORITE_SERVER}/all_favorites`, params).pipe(tap(
      (res: any) => {
        res;
      })
    );
  }
}
