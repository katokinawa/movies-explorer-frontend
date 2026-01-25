import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies, onLikeMovies, onDislikeMovies, liked }) {
  return (
    <ul className="movies-card-list">
      {movies.map((mov) => (
        <MoviesCard key={mov.id} movies={mov} onLikeMovies={onLikeMovies} onDislikeMovies={onDislikeMovies} liked={liked} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
