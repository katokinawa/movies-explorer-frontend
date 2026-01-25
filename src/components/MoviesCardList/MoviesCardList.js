import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <ul className="movies-card-list">
      {props.movies.map((mov) => (
        <MoviesCard key={mov._id} movies={mov} />
      ))}
    </ul>
  );
}

export default MoviesCardList;
