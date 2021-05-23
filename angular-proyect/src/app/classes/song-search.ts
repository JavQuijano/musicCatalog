import { Song } from "./song"

export class SongSearch {
  href: String;
  items: Song[];
  limit?: number;
  next?: String;
  offset?: number;
  previous?: String;
  total: number;
}
