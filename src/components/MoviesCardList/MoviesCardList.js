import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  onLikeMovies,
  onDislikeMovies,
  liked,
  moviesListNumber,
}) {
  return (
    <ul className="movies-card-list">
      {movies.slice(0, moviesListNumber).map((mov) => (
        <MoviesCard
          key={mov.id}
          movies={mov}
          onLikeMovies={onLikeMovies}
          onDislikeMovies={onDislikeMovies}
          liked={liked}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
