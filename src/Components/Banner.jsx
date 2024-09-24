import React from 'react';

function Banner({ featuredMovie }) {
  return (
    <div className="bg-gray-800 text-white p-8">
      <h1 className="text-4xl font-bold mb-4">{featuredMovie.Title}</h1>
      <p className="text-xl">Year: {featuredMovie.Year}</p>
      <p className="text-lg mt-4">{featuredMovie.Plot}</p>
    </div>
  );
}

export default Banner;
