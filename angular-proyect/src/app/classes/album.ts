export interface Album {
  id: String,
  name: String,
  type: String,
  album_type: String,
  artists: [{
    name: String,
    type: String,
    id: String
  }],
  images: [{
    height: number,
    width: number,
    url: String
  }]
}
