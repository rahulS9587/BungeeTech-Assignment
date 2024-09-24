import React, { useState, useEffect } from 'react';

function Watchlist() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.length === 0 ? (
        <p>No movies in your watchlist.</p>
      ) : (
        favorites.map((movie) => (
          <div key={movie.imdbID} className="bg-white border p-4 shadow-lg">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-64 object-cover" />
            <h3 className="text-lg font-bold mt-4">{movie.Title}</h3>
            <p className="text-gray-600">Year: {movie.Year}</p>
            <button onClick={() => removeFromFavorites(movie.imdbID)} className="mt-4 bg-red-500 text-white px-4 py-2">
              Remove from Watchlist
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;
