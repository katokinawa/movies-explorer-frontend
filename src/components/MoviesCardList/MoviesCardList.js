import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  movies,
  onLikeMovies,
  onDislikeMovies,
  liked,
  moviesListNumber,
  buttonType
}) {
  return (
    <ul className="movies-card-list">
      {movies.slice(0, moviesListNumber).map((mov) => (
        <MoviesCard
          key={mov.id}
          movies={mov}
          liked={liked}
          buttonType={buttonType}
          onDislikeMovies={onDislikeMovies}
          onLikeMovies={onLikeMovies}
        />
      ))}
    </ul>
  );
}

export default MoviesCardList;
