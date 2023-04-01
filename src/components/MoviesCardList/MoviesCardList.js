import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  console.log(movies)
  return (
    <ul className="movies-card-list">
      {movies.map((mov) => (
        <MoviesCard key={mov.movieId} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
