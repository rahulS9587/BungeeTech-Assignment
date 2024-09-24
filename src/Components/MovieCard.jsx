import React from 'react';

function MovieCard({ movie, addToFavorites, removeFromFavorites, isFavorite }) {
  return (
    <div className="bg-white border p-4 shadow-lg">
      <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} alt={movie.Title} className="w-full h-64 object-cover" />
      <h3 className="text-lg font-bold mt-4">{movie.Title}</h3>
      <p className="text-gray-600">Year: {movie.Year}</p>
      {isFavorite ? (
        <button onClick={() => removeFromFavorites(movie.imdbID)} className="mt-4 bg-red-500 text-white px-4 py-2">
          Remove from Favorites
        </button>
      ) : (
        <button onClick={() => addToFavorites(movie)} className="mt-4 bg-blue-500 text-white px-4 py-2">
          Add to Favorites
        </button>
      )}
    </div>
  );
}

export default MovieCard;
