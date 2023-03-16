import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList() {
  return (
    <ul className="movies-card__list">
      <MoviesCard />
    </ul>
  );
}

export default MoviesCardList;
