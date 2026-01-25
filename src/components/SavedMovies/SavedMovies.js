import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies({ movies }) {
  return (
    <section className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="saved-movies__space"></section>
    </section>
  );
}

export default SavedMovies;
