import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <ul className="movies-card-list">
      {movies && movies.map((mov) => (
        <MoviesCard key={mov.movieId} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
