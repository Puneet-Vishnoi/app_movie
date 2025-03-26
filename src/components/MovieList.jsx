import  react from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      {movies.map((movie) => (
        <div key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)} style={{ cursor: "pointer" }}>
          <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"} alt={movie.Title} />
          <h3>{movie.Title} ({movie.Year})</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
