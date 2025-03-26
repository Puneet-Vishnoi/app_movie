import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetails = ({ movieId, onBack }) => {
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.error(err));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={onBack}>Back</button>
      <h2>{movie.Title} ({movie.Year})</h2>
      <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
    </div>
  );
};

export default MovieDetails;
