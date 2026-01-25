import "./SavedMovies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";

function SavedMovies() {

  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
      <section className="saved-movies__space"></section>
    </main>
  );
}

export default SavedMovies;
