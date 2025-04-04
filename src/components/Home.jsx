import React from 'react';
import Gallery from './Gallery';

function Home() {
  return (
    <div className="mt-3">
      <Gallery title="The Lord of the Rings" query="lord of the rings" />
      <Gallery title="Star Wars Saga" query="Star Wars" />
      <Gallery title="Harry Potter Saga" query="Harry Potter" />
    </div>
  );
}

export default Home;