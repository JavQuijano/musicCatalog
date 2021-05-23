import { Album } from "./album";

export interface AlbumSearch {
  href: String,
  items: Album[],
  limit?: number,
  next?: String,
  offset?: number,
  previous?: String,
  total: number
}
