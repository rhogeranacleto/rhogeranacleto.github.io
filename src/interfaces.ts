interface IImage {
  size: string;
  '#text': string;
}

export interface IAlbum {
  name: string;
  playcount: string;
  url: string;
  image: IImage[];
}

export interface ITopAlbums {
  topalbums: {
    album: IAlbum[];
  };
}
