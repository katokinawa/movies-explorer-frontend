import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies() {
  return (
    <ul className="saved-movies">
      <MoviesCardList />
    </ul>
  );
}

export default SavedMovies;
