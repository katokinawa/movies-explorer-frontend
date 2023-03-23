import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
function Movies({ movies }) {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
      <section className="movies-button-wrapper button-animation">
        <button className="movies-button">
          Ещё
        </button>
      </section>
    </main>
  );
}

export default Movies;
