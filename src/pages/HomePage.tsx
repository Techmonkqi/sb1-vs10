import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, ThumbsUp, ChevronRight } from 'lucide-react';
import { SongCard } from '../components/SongCard';
import { songs, genres } from '../data/mockData';

interface HomePageProps {
  isPlaying: boolean;
  currentSong: number | null;
  onPlayToggle: (id: number) => void;
  onVote: (id: number) => void;
}

export const HomePage = ({ isPlaying, currentSong, onPlayToggle, onVote }: HomePageProps) => {
  return (
    <div className="space-y-8">
      {/* Featured Carousel */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop" 
          alt="Featured"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-8 left-8">
            <h2 className="text-3xl font-bold mb-2">Featured Playlist</h2>
            <p className="text-gray-300 mb-4">Discover the hottest tracks</p>
            <button className="bg-cyan-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-cyan-300 transition">
              Play Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="grid grid-cols-3 gap-6">
        <Link to="/trending" className="bg-gradient-to-br from-purple-600 to-pink-500 p-6 rounded-xl hover:opacity-90 transition">
          <TrendingUp className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold mb-2">Trending Now</h2>
          <p className="text-white/80">Discover what's hot</p>
        </Link>
        <Link to="/new" className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-xl hover:opacity-90 transition">
          <Clock className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold mb-2">New Releases</h2>
          <p className="text-white/80">Fresh tracks daily</p>
        </Link>
        <Link to="/top" className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl hover:opacity-90 transition">
          <ThumbsUp className="w-8 h-8 mb-4" />
          <h2 className="text-xl font-bold mb-2">Top Charts</h2>
          <p className="text-white/80">Most popular</p>
        </Link>
      </div>

      {/* Popular Playlists */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular Playlists</h2>
          <Link to="/playlists" className="flex items-center text-sm text-cyan-400 hover:text-cyan-300">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {genres.map((genre) => (
            <Link key={genre.id} to={`/genres/${genre.id}`} className="playlist-card group">
              <img src={genre.cover} alt={genre.name} />
              <div className="overlay flex items-end p-4">
                <div>
                  <h3 className="font-semibold text-lg">{genre.name}</h3>
                  <p className="text-sm text-gray-300">{genre.songCount} songs</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending Songs */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Trending Songs</h2>
          <Link to="/trending" className="flex items-center text-sm text-cyan-400 hover:text-cyan-300">
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-6">
          {songs.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              isPlaying={isPlaying}
              currentSong={currentSong}
              onPlayToggle={onPlayToggle}
              onVote={onVote}
            />
          ))}
        </div>
      </section>
    </div>
  );
};