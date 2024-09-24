import React from 'react';
import { Link } from 'react-router-dom';
import imdbLogo from '../assets/Movie-logo.png'; // Place IMDb logo in src/assets

function Navbar() {
  return (
    <nav className="bg-white-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={imdbLogo} alt="IMDb" className="w-24" />
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="text-black font-bold">Home</Link>
          <Link to="/watchlist" className="text-black font-bold">Watchlist</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
