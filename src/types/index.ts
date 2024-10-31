export interface Song {
  id: number;
  title: string;
  artist: string;
  cover: string;
  votes: number;
  genre: string;
  trending: boolean;
  releaseDate: string;
  duration: string;
  plays: number;
  lyrics: string;
}

export interface Genre {
  id: number;
  name: string;
  cover: string;
  songCount: number;
}