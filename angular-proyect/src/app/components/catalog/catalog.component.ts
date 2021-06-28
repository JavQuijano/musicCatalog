import { Component, OnInit } from '@angular/core';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor(private spotify:SpotifyApiService) { }

  newReleases: any;
  currentPage = 1;
  itemsPerPage = 4;
  pageSize: number;

  ngOnInit(): void {
    this.spotify.setAccessToken().then(() => this.getNewReleases());
  }

  getNewReleases():void {
    this.spotify.getNewReleases().subscribe((newReleases) => {this.newReleases = newReleases; });
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
}
