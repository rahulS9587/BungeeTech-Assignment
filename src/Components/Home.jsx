import React from 'react';
import Banner from './Banner';
import Movies from './Movies';

function Home() {
  const featuredMovie = {
    Title: 'The Batman',
    Year: '2022',
    Plot: 'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.'
  };

  return (
    <div>
      <Banner featuredMovie={featuredMovie} />
      <Movies />
    </div>
  );
}

export default Home;
