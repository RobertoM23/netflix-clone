import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://www.omdbapi.com/?apikey=1fbc15cc&i=${movieId}`);
      const data = await res.json();
      setDetails(data);
    };

    const fetchComments = async () => {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        headers: {
          Authorization: 'Bearer [INSERISCI_TUO_TOKEN]'
        }
      });
      const data = await res.json();
      setComments(data);
    };

    fetchDetails();
    fetchComments();
  }, [movieId]);

  if (!details) return <p className="text-white text-center">Loading...</p>;

  return (
    <div className="container text-white mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={details.Poster} alt={details.Title} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h2>{details.Title}</h2>
          <p>{details.Plot}</p>
          <p><strong>Director:</strong> {details.Director}</p>
          <p><strong>Year:</strong> {details.Year}</p>
          <p><strong>Rating:</strong> {details.imdbRating}</p>
          <h4>Comments:</h4>
          <ul>
            {comments.map((comment) => (
              <li key={comment._id}>{comment.comment} - ⭐ {comment.rate}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
