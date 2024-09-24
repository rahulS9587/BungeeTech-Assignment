import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [sortBy, setSortBy] = useState(''); // Initially empty, can be set to 'year' or 'rating'
  const apiKey = '6ea1ea55';

  useEffect(() => {
    fetchMovies();
  }, [page]); // Fetch movies whenever the page changes

  useEffect(() => {
    if (sortBy === 'year') {
      const sortedMovies = [...movies].sort((a, b) => b.Year - a.Year);
      setMovies(sortedMovies);
    }
  }, [sortBy]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`https://www.omdbapi.com/?s=batman&apikey=${apiKey}&page=${page}`);
      if (response.data.Search) {
        setMovies(response.data.Search);
      } else {
        setMovies([]); // Clear movies if no results are found
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1); // Increment page
  };

  const handlePreviousPage = () => {
    setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1)); // Decrement page but not below 1
  };

  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const removeFromFavorites = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value); // Update the sorting state
  };

  return (
    <div>
      {/* Sort Dropdown */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Sort By:</label>
          <select
            className="bg-gray-200 p-2 rounded"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="">None</option>
            <option value="year">Year</option>
            {/* You could add other options here, such as rating if available */}
          </select>
        </div>
        {/* Pagination Controls */}
        <div className="flex items-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 mr-2"
            onClick={handlePreviousPage}
            disabled={page === 1}
          >
            Prev
          </button>
          <span className="mx-2">{page}</span>
          <button
            className="bg-blue-500 text-white px-4 py-2"
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
      </div>

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
          />
        ))}
      </div>
    </div>
  );
}

export default Movies;
