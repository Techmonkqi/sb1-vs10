import React from 'react';
import { Heart, Play, Pause, Volume2, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';
import { Song } from '../types';

interface NowPlayingProps {
  currentSong: Song | null;
  isPlaying: boolean;
  onPlayToggle: () => void;
}

export const NowPlaying = ({ currentSong, isPlaying, onPlayToggle }: NowPlayingProps) => {
  if (!currentSong) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#020044] border-t border-white/10 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 w-1/4">
          <img 
            src={currentSong.cover}
            alt="Now playing"
            className="w-14 h-14 rounded-lg"
          />
          <div>
            <h4 className="font-semibold truncate">{currentSong.title}</h4>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>
          <button className="hover:text-cyan-400 transition-colors">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button 
              onClick={onPlayToggle}
              className="bg-cyan-400 p-2 rounded-full hover:bg-cyan-300 transition-colors"
            >
              {isPlaying ? 
                <Pause className="w-6 h-6 text-black" /> : 
                <Play className="w-6 h-6 text-black" />
              }
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center space-x-2">
            <span className="text-xs text-gray-400">0:00</span>
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="w-0 h-full bg-cyan-400 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">{currentSong.duration}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 w-1/4 justify-end">
          <Volume2 className="w-5 h-5 text-gray-400" />
          <div className="w-24 h-1 bg-white/10 rounded-full">
            <div className="w-1/2 h-full bg-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};