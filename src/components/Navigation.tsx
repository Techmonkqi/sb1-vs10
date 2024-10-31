import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music2, Search, Home, TrendingUp, Clock, Users, Video, ListMusic, BarChart2, Disc, PlusSquare, Heart, List } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-[#020044] border-r border-white/10">
      {/* Logo Section */}
      <div className="px-6 py-4 border-b border-white/10">
        <Link to="/" className="flex items-center space-x-2">
          <Music2 className="w-8 h-8 text-cyan-400" />
          <span className="text-xl font-bold text-white">VeRsEsS</span>
        </Link>
      </div>

      {/* Rest of the Navigation component remains the same */}
      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/5 rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
      </div>

      {/* Main Navigation */}
      <div className="px-2 py-4">
        <h3 className="px-4 text-sm font-semibold text-gray-400 uppercase mb-2">Music</h3>
        <nav className="space-y-1">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link to="/trending" className={`nav-link ${location.pathname === '/trending' ? 'active' : ''}`}>
            <TrendingUp className="w-5 h-5" />
            <span>Trending</span>
          </Link>
          <Link to="/new" className={`nav-link ${location.pathname === '/new' ? 'active' : ''}`}>
            <Clock className="w-5 h-5" />
            <span>New</span>
          </Link>
          <Link to="/artists" className={`nav-link ${location.pathname === '/artists' ? 'active' : ''}`}>
            <Users className="w-5 h-5" />
            <span>Artists</span>
          </Link>
          <Link to="/videos" className={`nav-link ${location.pathname === '/videos' ? 'active' : ''}`}>
            <Video className="w-5 h-5" />
            <span>Videos</span>
          </Link>
          <Link to="/playlists" className={`nav-link ${location.pathname === '/playlists' ? 'active' : ''}`}>
            <ListMusic className="w-5 h-5" />
            <span>Playlists</span>
          </Link>
          <Link to="/charts" className={`nav-link ${location.pathname === '/charts' ? 'active' : ''}`}>
            <BarChart2 className="w-5 h-5" />
            <span>Charts</span>
          </Link>
          <Link to="/genres" className={`nav-link ${location.pathname === '/genres' ? 'active' : ''}`}>
            <Disc className="w-5 h-5" />
            <span>Genres</span>
          </Link>
        </nav>

        <h3 className="px-4 text-sm font-semibold text-gray-400 uppercase mt-8 mb-2">Library</h3>
        <nav className="space-y-1">
          <Link to="/add-playlist" className="nav-link">
            <PlusSquare className="w-5 h-5" />
            <span>Create Playlist</span>
          </Link>
          <Link to="/favorites" className="nav-link">
            <Heart className="w-5 h-5" />
            <span>Liked Songs</span>
          </Link>
          <Link to="/my-playlists" className="nav-link">
            <List className="w-5 h-5" />
            <span>My Playlists</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};