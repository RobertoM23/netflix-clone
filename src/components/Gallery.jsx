import React, { useEffect, useState } from 'react';

function Gallery({ title, query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=1fbc15cc&s=${query}`);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Errore nella fetch');
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [query]);

  if (loading) return <p className="text-white px-4">Loading "{title}"...</p>;
  if (error) return <p className="text-danger px-4">{error}</p>;

  return (
    <div className="container mt-4">
      <h4 className="fw-bold mb-3">{title}</h4>
      <div className="row g-3">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col-6 col-md-4 col-lg-2">
            <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;