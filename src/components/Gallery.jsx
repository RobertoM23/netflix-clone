import React, { useEffect, useState } from "react";
import "../assets/gallery.css";

const Gallery = ({ saga }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=1fbc15cc&s=${encodeURIComponent(saga)}`)
      .then(res => res.json())
      .then(data => setMovies(data.Search || []))
      .catch(err => console.error(err));
  }, [saga]);

  return (
    <div className="gallery-wrapper container mt-4">
      <h4 className="fw-bold mb-3">{saga}</h4>
      <div className="gallery-scroll d-flex overflow-auto">
        {movies.map(movie => (
          <div className="me-2 flex-shrink-0" style={{ width: "150px" }} key={movie.imdbID}>
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x445?text=No+Image"}
              alt={movie.Title}
              className="img-fluid rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
