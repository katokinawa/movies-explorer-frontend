import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

function Movies() {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
      <section className="movies_button-wrapper">
        <button className="movies_button" type="button">Ещё</button>
      </section>
    </section>
  );
}

export default Movies;
