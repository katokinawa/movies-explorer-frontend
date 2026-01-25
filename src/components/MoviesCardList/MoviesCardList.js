import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Movies/Preloader/Preloader"

function MoviesCardList({ movies, isLoading }) {
  return (
    isLoading ?
    <Preloader /> :
    <ul className="movies-card-list">
      {movies.map((mov) => (
        <MoviesCard key={mov.movieId} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
