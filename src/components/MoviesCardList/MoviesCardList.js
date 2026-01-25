import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, moviesNumber }) {
  return (
    <ul className="movies-card-list">
      {movies && movies.slice(0, moviesNumber).map((mov) => (
        <MoviesCard key={mov.movieId} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
