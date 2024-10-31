import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ThumbsUp, Play, Pause, Brain, Pen } from 'lucide-react';
import { Song } from '../types';

interface SongCardProps {
  song: Song;
  isPlaying: boolean;
  currentSong: number | null;
  onPlayToggle: (id: number) => void;
  onVote: (id: number) => void;
}

export const SongCard = ({ song, isPlaying, currentSong, onPlayToggle, onVote }: SongCardProps) => {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="group">
      <div className="relative mb-3">
        <img 
          src={song.cover} 
          alt={song.title} 
          className="w-full aspect-square object-cover rounded-xl"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
        <button 
          onClick={() => onPlayToggle(song.id)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="bg-cyan-400 p-3 rounded-full">
            {currentSong === song.id && isPlaying ? (
              <Pause className="w-6 h-6 text-black" />
            ) : (
              <Play className="w-6 h-6 text-black" />
            )}
          </div>
        </button>
      </div>
      <div>
        <Link to={`/songs/${song.id}`}>
          <h3 className="font-semibold mb-1 truncate hover:text-cyan-400 transition-colors">
            {song.title}
          </h3>
        </Link>
        <Link to={`/artists/${song.artist.toLowerCase().replace(' ', '-')}`} 
          className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
          {song.artist}
        </Link>
        <div className="mt-2 flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => onVote(song.id)}
              className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>{song.votes.toLocaleString()}</span>
            </button>
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`hover:text-cyan-400 transition-colors ${isLiked ? 'text-red-500' : ''}`}
            >
              <Heart className="w-4 h-4" />
            </button>
            <Link to={`/songs/${song.id}/comments`} className="hover:text-cyan-400 transition-colors">
              <Brain className="w-4 h-4" />
            </Link>
            <Link to={`/songs/${song.id}/lyrics`} className="hover:text-cyan-400 transition-colors">
              <Pen className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};