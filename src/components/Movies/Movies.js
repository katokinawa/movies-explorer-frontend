import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies({ movies }) {
  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="movies-button-wrapper button-animation">
        <button className="movies-button">
          Ещё
        </button>
      </section>
    </section>
  );
}

export default Movies;
