import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dark-overlay',
  templateUrl: './dark-overlay.component.html',
  styleUrls: ['./dark-overlay.component.css']
})
export class DarkOverlayComponent implements OnInit {
  @Input() artistName: String;
  @Input() albumName: String;
  @Input() albumReleaseDate: String;
  @Input() totalTracks: String;
  @Input() songUrl: String;
  @Input() albumId: String;

  constructor() { }

  ngOnInit(): void {}

}
