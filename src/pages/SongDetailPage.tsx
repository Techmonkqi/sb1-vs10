import React from 'react';
import { useParams } from 'react-router-dom';
import { Heart, ThumbsUp, Brain, Pen, Play, Pause } from 'lucide-react';
import { songs } from '../data/mockData';

interface SongDetailPageProps {
  isPlaying: boolean;
  currentSong: number | null;
  onPlayToggle: (id: number) => void;
  onVote: (id: number) => void;
}

export const SongDetailPage = ({ isPlaying, currentSong, onPlayToggle, onVote }: SongDetailPageProps) => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = React.useState(false);
  
  const song = songs.find(s => s.id === Number(id));
  
  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex space-x-8">
        <div className="w-1/3">
          <img 
            src={song.cover} 
            alt={song.title}
            className="w-full aspect-square object-cover rounded-xl shadow-lg"
          />
        </div>
        
        <div className="w-2/3 space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{song.title}</h1>
            <p className="text-xl text-gray-400">{song.artist}</p>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onPlayToggle(song.id)}
              className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:bg-cyan-300 transition"
            >
              {currentSong === song.id && isPlaying ? (
                <>
                  <Pause className="w-6 h-6" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  <span>Play</span>
                </>
              )}
            </button>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onVote(song.id)}
                className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <ThumbsUp className="w-6 h-6" />
                <span>{song.votes.toLocaleString()}</span>
              </button>
              
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center space-x-2 hover:text-red-500 transition-colors ${
                  isLiked ? 'text-red-500' : 'text-gray-400'
                }`}
              >
                <Heart className="w-6 h-6" />
                <span>Like</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Brain className="w-6 h-6" />
                <span>Comment</span>
              </button>
              
              <button className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Pen className="w-6 h-6" />
                <span>Annotate</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{song.plays.toLocaleString()} plays</span>
              <span>•</span>
              <span>Released {song.releaseDate}</span>
              <span>•</span>
              <span>{song.duration}</span>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Lyrics</h2>
              <p className="whitespace-pre-line text-gray-300">{song.lyrics}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};