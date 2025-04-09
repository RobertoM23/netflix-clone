import React from 'react';
import Gallery from './Gallery';

const TVShows = () => (
  <div className="mt-3">
    <h2 className="text-white text-center">TV Shows</h2>
    <Gallery saga="Breaking Bad" />
    <Gallery saga="Stranger Things" />
    <Gallery saga="The Crown" />
  </div>
);

export default TVShows;
