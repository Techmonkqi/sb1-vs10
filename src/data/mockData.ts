import { Song, Genre } from '../types';

export const songs: Song[] = [
  {
    id: 1,
    title: "Last Last",
    artist: "Burna Boy",
    cover: "https://images.unsplash.com/photo-1516814447281-2b13a276c803?w=300&h=300&fit=crop",
    votes: 15234,
    genre: "Afrobeats",
    trending: true,
    releaseDate: "2024-01-15",
    duration: "3:52",
    plays: 2150420,
    lyrics: "Everything gather be cruise now..."
  },
  {
    id: 2,
    title: "Rush",
    artist: "Ayra Starr",
    cover: "https://images.unsplash.com/photo-1539035104074-dee66086b5e3?w=300&h=300&fit=crop",
    votes: 12982,
    genre: "Afrobeats",
    trending: true,
    releaseDate: "2024-02-01",
    duration: "3:05",
    plays: 1842150,
    lyrics: "I'm in a rush..."
  },
  {
    id: 3,
    title: "Unavailable",
    artist: "Davido ft. Musa Keys",
    cover: "https://images.unsplash.com/photo-1523246224990-496e9a19113a?w=300&h=300&fit=crop",
    votes: 11754,
    genre: "Afrobeats",
    trending: true,
    releaseDate: "2024-01-20",
    duration: "3:30",
    plays: 1635890,
    lyrics: "I dey for you..."
  },
  {
    id: 4,
    title: "Calm Down",
    artist: "Rema & Selena Gomez",
    cover: "https://images.unsplash.com/photo-1518799175676-a0fed7996acb?w=300&h=300&fit=crop",
    votes: 10234,
    genre: "Afrobeats",
    trending: true,
    releaseDate: "2024-01-10",
    duration: "3:59",
    plays: 1535890,
    lyrics: "Baby calm down..."
  },
  {
    id: 5,
    title: "People",
    artist: "Libianca",
    cover: "https://images.unsplash.com/photo-1533662958083-61eb4c65ee69?w=300&h=300&fit=crop",
    votes: 9754,
    genre: "Afrobeats",
    trending: true,
    releaseDate: "2024-02-05",
    duration: "3:45",
    plays: 1435890,
    lyrics: "I've been drinking more alcohol..."
  }
];

export const genres: Genre[] = [
  {
    id: 1,
    name: "Afrobeats",
    cover: "https://images.unsplash.com/photo-1516814447281-2b13a276c803?w=800&h=600&fit=crop",
    songCount: 1250
  },
  {
    id: 2,
    name: "Afropop",
    cover: "https://images.unsplash.com/photo-1523246224990-496e9a19113a?w=800&h=600&fit=crop",
    songCount: 980
  },
  {
    id: 3,
    name: "African Gospel",
    cover: "https://images.unsplash.com/photo-1518799175676-a0fed7996acb?w=800&h=600&fit=crop",
    songCount: 750
  }
];