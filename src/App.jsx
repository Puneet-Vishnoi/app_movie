import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = (query) => {
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((res) => {
        if (res.data.Search) {
          setMovies(res.data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Movie Search App</h1>
      {!selectedMovieId ? (
        <>
          <SearchBar onSearch={fetchMovies} />
          <MovieList movies={movies} onSelectMovie={setSelectedMovieId} />
        </>
      ) : (
        <MovieDetails movieId={selectedMovieId} onBack={() => setSelectedMovieId(null)} />
      )}
    </div>
  );
};

export default App;
