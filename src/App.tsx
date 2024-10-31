import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { NowPlaying } from './components/NowPlaying';
import { HomePage } from './pages/HomePage';
import { SongDetailPage } from './pages/SongDetailPage';
import { songs } from './data/mockData';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<number | null>(null);

  const togglePlay = (songId: number) => {
    if (currentSong === songId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentSong(songId);
      setIsPlaying(true);
    }
  };

  const handleVote = (songId: number) => {
    // In a real app, this would make an API call
    console.log(`Voted for song ${songId}`);
  };

  const currentSongData = currentSong ? songs.find(s => s.id === currentSong) || null : null;

  return (
    <Router>
      <div className="flex min-h-screen bg-[#010039] text-white">
        <Navigation />
        <main className="flex-1 ml-64">
          <div className="px-8 py-6">
            <Routes>
              <Route 
                path="/" 
                element={
                  <HomePage 
                    isPlaying={isPlaying}
                    currentSong={currentSong}
                    onPlayToggle={togglePlay}
                    onVote={handleVote}
                  />
                } 
              />
              <Route 
                path="/songs/:id" 
                element={
                  <SongDetailPage 
                    isPlaying={isPlaying}
                    currentSong={currentSong}
                    onPlayToggle={togglePlay}
                    onVote={handleVote}
                  />
                } 
              />
            </Routes>
          </div>
        </main>
        {currentSongData && (
          <NowPlaying
            currentSong={currentSongData}
            isPlaying={isPlaying}
            onPlayToggle={() => currentSong && togglePlay(currentSong)}
          />
        )}
      </div>
    </Router>
  );
}

export default App;