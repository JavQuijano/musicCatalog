import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-top-songs',
  templateUrl: './top-songs.component.html',
  styleUrls: ['./top-songs.component.css']
})
export class TopSongsComponent implements OnInit {
  @Input() company: string;

  constructor() { }

  ngOnInit(): void {
  }

}
