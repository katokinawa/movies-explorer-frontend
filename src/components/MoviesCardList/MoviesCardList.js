import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ movies }) {
  return (
    <ul className="movies-card-list">
      {movies.map((mov) => (
        <MoviesCard key={mov._id} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
