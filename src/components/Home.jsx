import React from 'react';
import Gallery from './Gallery';

function Home() {
  return (
    <div className="mt-3">
      <Gallery title="Il Signore degli Anelli e Lo Hobbit" query="lord of the rings hobbit" />
      <Gallery title="Star Wars Saga" query="Star Wars" />
      <Gallery title="Harry Potter" query="Harry Potter" />
    </div>
  );
}

export default Home;